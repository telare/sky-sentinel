import socketio
import time
import random
import threading
import tkinter as tk
from tkinter import ttk, scrolledtext
from datetime import datetime, timezone

# --- CONFIGURATION ---
BACKEND_URL = 'http://localhost:3003'

# --- THEME CONSTANTS ---
COLORS = {
    "bg_main": "#111827",
    "bg_panel": "#1f2937",
    "accent_primary": "#06b6d4",
    "accent_success": "#10b981",
    "accent_warning": "#f59e0b",
    "accent_danger": "#ef4444",
    "text_main": "#f3f4f6",
    "text_dim": "#9ca3af",
    "terminal_bg": "#000000",
    "terminal_text": "#22d3ee"
}

FONTS = {
    "header": ("Segoe UI", 16, "bold"),
    "sub_header": ("Segoe UI", 10, "bold"),
    "body": ("Segoe UI", 10),
    "mono": ("Consolas", 10),
    "data_label": ("Segoe UI", 9),
    "data_value": ("Consolas", 12, "bold")
}

class UavSimulatorGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("SkySentinel | Operator Console")
        self.root.geometry("700x850")
        self.root.configure(bg=COLORS["bg_main"])
        
        self.sio = socketio.Client(handle_sigint=False)
        self.running = False
        self.failure_mode = "NORMAL"
        
        self.state = {
            "latitude": 50.4501, "longitude": 30.5234, "altitude": 150.0,
            "verticalSpeed": 0.0, "airspeed": 85.0, "groundSpeed": 82.0,
            "pitch": 2.0, "roll": 0.0, "throttle": 65.0, "servoCurrent": 0.8,
            "gear_status": 0, "battery_level": 95.0, "temperature": 42.0,
            "rssi": -62.0, "latency": 28.0
        }
        
        self.telemetry_labels = {} 
        self.setup_ui()
        
        # Standard exit protocol
        self.root.protocol("WM_DELETE_WINDOW", self.on_exit)

    def setup_ui(self):
        # --- HEADER ---
        header_frame = tk.Frame(self.root, bg=COLORS["bg_main"])
        header_frame.pack(fill="x", padx=20, pady=(20, 10))
        
        tk.Label(header_frame, text="SKYSENTINEL", font=("Segoe UI", 22, "bold"), 
                 fg=COLORS["accent_primary"], bg=COLORS["bg_main"]).pack(side="left")
        
        self.status_indicator = tk.Label(header_frame, text="● OFFLINE", font=FONTS["sub_header"],
                                         fg=COLORS["text_dim"], bg=COLORS["bg_main"])
        self.status_indicator.pack(side="right", anchor="center")

        main_container = tk.Frame(self.root, bg=COLORS["bg_main"])
        main_container.pack(fill="both", expand=True, padx=20)

        # --- LEFT COLUMN ---
        left_col = tk.Frame(main_container, bg=COLORS["bg_main"])
        left_col.pack(side="left", fill="both", expand=True, padx=(0, 10))

        # 1. Diagnostics (Standard Buttons)
        fail_frame = tk.LabelFrame(left_col, text="DIAGNOSTICS", font=FONTS["sub_header"],
                                   bg=COLORS["bg_main"], fg=COLORS["text_dim"], 
                                   bd=1, relief="solid")
        fail_frame.pack(fill="x", pady=10, ipady=5)

        failures = [
            ("NORMAL", "NORMAL"),
            ("PITOT CLOG", "PITOT"),
            ("ENGINE FAIL", "ENGINE"),
            ("SERVO STALL", "SERVO")
        ]
        
        for i, (text, mode) in enumerate(failures):
            r, c = divmod(i, 2)
            # Just a standard button. No hover, no custom class.
            btn = tk.Button(fail_frame, text=text, font=FONTS["body"],
                            bg=COLORS["bg_panel"], fg=COLORS["text_main"],
                            activebackground=COLORS["accent_primary"],
                            relief="flat", borderwidth=0, cursor="hand2",
                            command=lambda m=mode: self.set_failure(m))
            btn.grid(row=r, column=c, sticky="ew", padx=5, pady=5)
            
        fail_frame.grid_columnconfigure(0, weight=1)
        fail_frame.grid_columnconfigure(1, weight=1)

        # 2. Connection Control (Standard Button)
        self.start_btn = tk.Button(left_col, text="START STREAM", font=("Segoe UI", 12, "bold"),
                                   bg="#2563eb", fg="white", activebackground="#1d4ed8",
                                   relief="flat", height=2, command=self.start_sim)
        self.start_btn.pack(fill="x", pady=(20, 0))

        # --- RIGHT COLUMN ---
        right_col = tk.Frame(main_container, bg=COLORS["bg_main"])
        right_col.pack(side="right", fill="both", expand=True, padx=(10, 0))

        tele_frame = tk.LabelFrame(right_col, text="LIVE TELEMETRY", font=FONTS["sub_header"],
                                   bg=COLORS["bg_main"], fg=COLORS["text_dim"],
                                   bd=1, relief="solid")
        tele_frame.pack(fill="x", pady=10)

        metrics = [
            ("ALTITUDE (m)", "altitude"), ("AIRSPEED (km/h)", "airspeed"),
            ("LATITUDE", "latitude"), ("LONGITUDE", "longitude"),
            ("BATTERY (%)", "battery_level"), ("THROTTLE (%)", "throttle"),
            ("TEMP (°C)", "temperature"), ("RSSI (dBm)", "rssi")
        ]

        for i, (label_text, key) in enumerate(metrics):
            r, c = divmod(i, 2)
            cell = tk.Frame(tele_frame, bg=COLORS["bg_panel"], padx=10, pady=5)
            cell.grid(row=r, column=c, sticky="ew", padx=2, pady=2)
            tk.Label(cell, text=label_text, font=FONTS["data_label"], fg=COLORS["text_dim"], bg=COLORS["bg_panel"]).pack(anchor="w")
            val = tk.Label(cell, text="--", font=FONTS["data_value"], fg=COLORS["accent_primary"], bg=COLORS["bg_panel"])
            val.pack(anchor="e")
            self.telemetry_labels[key] = val
            
        tele_frame.grid_columnconfigure(0, weight=1)
        tele_frame.grid_columnconfigure(1, weight=1)

        self.log_area = scrolledtext.ScrolledText(right_col, height=12, bg=COLORS["terminal_bg"], 
                                                  fg=COLORS["terminal_text"], font=FONTS["mono"])
        self.log_area.pack(fill="both", expand=True)

    def set_failure(self, mode):
        """
        Класифікація відмов за Лекцією №4 (Апаратні, Програмні, Функціональні)
        та Лекцією №10 (Метод аналітичної надлишковості).
        """
        self.failure_mode = mode
        
        # Словник для логування з термінологією лекцій
        descriptions = {
            "NORMAL": "Стан штатного функціонування (Норма)",
            "PITOT": "Функціональна відмова ПВД (Порушення аналітичної надлишковості)",
            "ENGINE": "Поступова відмова силової установки (Деградація тяги)",
            "SERVO": "Апаратна відмова виконавчого механізму (Критичне перевантаження)"
        }
        
        color = COLORS["accent_danger"] if mode != "NORMAL" else COLORS["accent_success"]
        self.log(f"CIUS_STATE >> {descriptions.get(mode, mode)}", color)

    def log(self, msg, color=None):
            self.log_area.insert(tk.END, f"[{datetime.now().strftime('%H:%M:%S')}] {msg}\n") 
            self.log_area.see(tk.END)
    
    def calc_checksum(self, d):
        s = "|".join([f"{k}:{format(round(float(d[k]), 4) + 0.0, 'g')}" if isinstance(d[k], (int, float)) else f"{k}:{d[k]}" for k in sorted(d.keys())])
        c = 0
        for char in s: c ^= ord(char)
        return hex(c)[2:].upper().zfill(2)

    def sim_loop(self):
        while self.running:
            # --- ЛЕКЦІЯ №10: МОДЕЛЮВАННЯ ФІЗИЧНИХ ПРОЦЕСІВ ---
            
            if self.failure_mode == "PITOT":
                # Сценарій: Закупорка приймача повітряного тиску (ПВД)
                # Результат: Airspeed (датчик) падає, але GroundSpeed (фізичний рух) стабільний.
                # Це створює "Нев'язку" (Residual) для алгоритму виявлення.
                self.state["airspeed"] = 10.2 
                self.state["verticalSpeed"] = round(random.uniform(-0.1, 0.1), 1)
                
            elif self.failure_mode == "ENGINE":
                # Сценарій: Деградація енергетичних параметрів (Лекція №8-9)
                # Результат: Throttle 100%, але VerticalSpeed < 0 (Втрата висоти).
                # Доводить неможливість виконання польотного завдання.
                self.state["throttle"] = 100.0
                if self.state["verticalSpeed"] > 10:
                    self.state["verticalSpeed"] = -5.8 
                if self.state["altitude"] > 10:
                    self.state["altitude"] -= 5.8
                if self.state["airspeed"] > 10:
                    self.state["airspeed"] -= 1.5
                
            elif self.failure_mode == "SERVO":
                # Сценарій: Заклинювання привода (Апаратна відмова)
                # Результат: Струм (servoCurrent) перевищує поріг 4.0А.
                # Лекція №10: Контроль непрямих параметрів стану.
                self.state["servoCurrent"] = 4.9
                self.state["roll"] = random.uniform(15.0, 45.0) # Drone starts to tilt
                
            else:
                # NORMAL: Штатна робота CIUS
                # Параметри знаходяться в межах допусків (Dormant errors absent)
                self.state["airspeed"] = round(random.uniform(84, 86), 1)
                self.state["verticalSpeed"] = round(random.uniform(-0.1, 0.1), 1)
                self.state["servoCurrent"] = round(random.uniform(0.6, 0.9), 1)
                self.state["altitude"] += self.state["verticalSpeed"]

            # Transmission
            now = datetime.now(timezone.utc)
            self.state["timestamp"] = now.strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + 'Z'
            checksum = self.calc_checksum(self.state)
            packet = {"data": self.state.copy(), "checksum": checksum}
            
            try:
                self.sio.emit('telemetry', packet)
                self.root.after(0, self.update_telemetry_ui)
            except Exception as e:
                # Log error safely from thread
                self.root.after(0, lambda: self.log(f"Emit Error: {e}", COLORS["accent_danger"]))

            time.sleep(1.0)
    def on_exit(self):
            self.running = False
            try:
                self.sio.disconnect()
            except:
                pass
            self.root.destroy()
    def update_telemetry_ui(self):
        # Update dashboard grid values
        for key, widget in self.telemetry_labels.items():
            if key in self.state:
                val = self.state[key]
                if isinstance(val, float):
                    fmt = "{:.4f}" if key in ["latitude", "longitude"] else "{:.1f}"
                    text_val = fmt.format(val)
                else:
                    text_val = str(val)
                widget.config(text=text_val)

    def start_sim(self):
        if not self.running:
            try:
                self.sio.connect(BACKEND_URL)
                self.running = True
                self.start_btn.config(text="STOP STREAM", bg=COLORS["accent_danger"])
                self.status_indicator.config(text="● LIVE", fg=COLORS["accent_success"])
                threading.Thread(target=self.sim_loop, daemon=True).start()
                self.log("Stream started.", COLORS["accent_success"])
            except Exception as e:
                self.log(f"Failed: {e}", COLORS["accent_danger"])
        else:
            self.running = False
            self.sio.disconnect()
            self.start_btn.config(text="START STREAM", bg="#2563eb")
            self.status_indicator.config(text="● OFFLINE", fg=COLORS["text_dim"])
            self.log("Stream stopped.")

if __name__ == "__main__":
    root = tk.Tk()
    app = UavSimulatorGUI(root)
    root.mainloop()