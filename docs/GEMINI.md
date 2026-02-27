# 🛰️ SkySentinel: UAV Failure Diagnosis System

**SkySentinel** — це сучасна розподілена КІУС (Комп’ютеризована інформаційна управляюча система), розроблена для моніторингу телеметрії та інтелектуальної діагностики технічного стану БПЛА літакового типу в реальному часі.

Цей проєкт реалізований у межах курсової роботи (Варіант №9) та демонструє принципи інформаційної сумісності, хмарних обчислень та обробки авіаційних даних.

---

## 🏗️ System Architecture

Проєкт побудований за принципом **Distributed Cloud-Native System** і розділений на три ключові сегменти:

### 1. Ground Segment (Frontend)

- **Стек:** `React`, `TypeScript`, `Tailwind CSS`, `Recharts`.
- **Функціонал:** \* Інтерфейс у стилі "Glass Cockpit".
- Панель **Master Caution** для візуалізації відмов.
- Реал-тайм графіки телеметрії та 2D/3D карти польоту.
- Генерація PDF-звітів про інциденти.

### 2. Backend Segment (The Brain)

- **Стек:** `NestJS`, `WebSockets (Socket.io)`, `Prisma ORM`, `PostgreSQL`.
- **Логіка:**
- **Telemetry Gateway:** Прийом потокових даних через WebSockets.
- **Failure Service:** Детермінована логіка діагностики (Hard Landings, Stalls, Sensor Drifts).
- **AI Engine:** Інтеграція з LLM API для інтерпретації аномалій та створення рекомендацій.

### 3. Infrastructure & DevOps (The Pipeline)

- **Стек:** `Docker`, `Nginx`, `DigitalOcean VPS`, `Prometheus`, `Grafana`.
- **Компоненти:**
- **Data Bridge (Python):** Скрипт-емулятор/міст, що передає дані з радіомодема на NestJS.
- **Monitoring:** Grafana-дашборди для контролю стану сервера та затримок мережі.

---

## 🛠️ Key Implementation Details (Variant 9)

Проєкт повинен повністю покривати завдання курсового проєкту:

1. **Класифікація відмов:** Реалізація ієрархія подій (`Failure`, `Warning`, `Advisory`) з прив'язкою до авіаційних стандартів.
2. **Методи контролю:** Впровадження **XOR-валідацію** цілісності пакетів (NMEA 0183) та Heartbeat-моніторинг зв'язку.
3. **Логіка виявлення:** Поєднання жорстких порогів (Thresholds) та аналізу патернів за допомогою AI.
4. **Дії у разі відмови:** Автоматичне формування Emergency Checklists та команд повернення на точку зльоту (RTL).

---

## 📊 Telemetry Flow

1. **Mock Generator** шле JSON-пакети через WebSockets на NestJS.
2. **NestJS Gateway** отримує дані, валідує їх та проганяє через **FailureService**.
3. Якщо виявлено аномалію, запис створюється в **PostgreSQL** через **Prisma**.
4. Оновлені дані та статус діагностики миттєво "пушаться" на **React UI**.

---

## 👥 The Team

- **tl** — Lead Fullstack Developer (React UI, NestJS Core, Diagnostics Logic).
- **Team Member 2** — DevOps & SRE Engineer (Infrastructure, Python Data Bridge, Monitoring, Deployment).

---

## 📜 License

Проєкт розроблено для навчальних цілей у межах дисципліни КІУС. Все ПЗ надається "як є".
