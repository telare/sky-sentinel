# 🛰️ SkySentinel: Data Flow & Telemetry Logic

This document describes the end-to-end data pipeline from the UAV Simulation (Python) to the Backend (NestJS) and finally to the Frontend (React).

---

## 1. Data Generation (Python Simulation)
The Python script (`packages/uav-simulation/main.py`) acts as the UAV's onboard computer. It simulates flight physics and generates telemetry.

### 📡 Telemetry Packet Structure
The simulation emits a JSON packet via Socket.io with the following structure:
- **`data`**: Current aircraft state (GPS, airspeed, altitude, pitch, roll, throttle, battery, etc.).
- **`checksum`**: A deterministic XOR hex string for integrity validation.

### 🛠️ Failure Injection Logic
The simulator includes pre-programmed failure scenarios to test the diagnostic system:
1.  **Pitot Tube Failure (20s-30s):** `airspeed` drops while `groundSpeed` remains high (Analytical Redundancy test).
2.  **Propulsion Failure (40s-50s):** `throttle` is high (>90%) but `verticalSpeed` is negative (Climb performance test).
3.  **Servo Stall (60s-70s):** `servoCurrent` spikes to 4.5A (Hardware health test).

---

## 2. Integrity Validation (NestJS Backend)
Before processing, the `ValidatorService` ensures the data hasn't been corrupted during transmission.

- **Algorithm:** XOR-based checksum (NMEA 0183 style).
- **Process:** The backend sorts the JSON keys alphabetically, creates a pipe-separated string (`key:value|key:value`), and calculates the XOR sum of all characters.
- **Outcome:** If the calculated checksum matches the packet's checksum, the data is passed to the diagnostic engine.

---

## 3. Diagnostic Engine (`FailuresService`)
The backend interprets raw telemetry into actionable alerts across four categories:

### A. Analytical Redundancy (Lecture №10)
- **Pitot vs GPS:** Compares `airspeed` (Pitot) against `groundSpeed` (GPS).
- **Threshold:** Difference > 15 km/h triggers a **PITOT_FAILURE** warning.

### B. Aerodynamic & Flight Dynamics
- **Stall Detection:** Triggered if `airspeed` < 45 km/h (Critical) or < 55 km/h (Warning).
- **Hard Landing:** High `verticalSpeed` (<-4.5 m/s) at low altitude (< 2m).
- **Unusual Attitude:** `pitch` > 45° or `roll` > 60°.

### C. Hardware Status
- **Thermal Monitor:** Triggered if `temperature` > 85°C.
- **Energy Management:** `battery_level` < 15% (Critical).
- **Gear Safety:** Wheels retracted (`gear_status: 0`) at altitude < 10m.

### D. Network & Connectivity
- **Signal Quality:** Monitors `rssi` (Signal Lost if < -100 dBm).
- **Control Lag:** Monitors `latency` (Critical if > 1000ms).
- **Heartbeat:** Triggers **Telemetry Timeout** if no data is received for > 5 seconds.

---

## 4. Data Distribution & Persistence
1.  **Database (Prisma/PostgreSQL):** Every detected failure is logged in the `FailureLog` table for post-flight analysis.
2.  **Real-time UI:** The validated telemetry is immediately broadcast to the React frontend via the `receive_ui_data` WebSocket event.
3.  **AI Interpretation:** Critical failures can be sent to the `AiService` for natural language explanation and emergency checklist generation.
