# 🛠️ Failure Analysis & AI Diagnostics

This document explains how the **KIUS (Control and Information-UAV System)** detects, classifies, and analyzes flight failures.

## 🧠 Failure Analysis Service (AI)
The **Failure Analysis Service** (`AiService`) acts as a virtual "Diagnostic Engineer." When a flight anomaly is detected by the system's hardcoded rules, this service is triggered to provide a deeper understanding of the situation.

### How it works:
1.  **Detection**: The `FailuresService` continuously monitors incoming telemetry against safety thresholds (e.g., airspeed, battery, vibration).
2.  **Context Gathering**: If a rule is violated, the system captures the full "snapshot" of the UAV's state (all telemetry parameters at that exact moment).
3.  **AI Reasoning**: The service sends this snapshot + the error description to **Google Gemini AI**.
4.  **Actionable Insights**: The AI returns a structured JSON diagnosis containing:
    *   **Root Cause**: A technical classification (e.g., "Mechanical blockage of the Pitot tube").
    *   **Severity**: Assessment of the risk (CRITICAL, WARNING, etc.).
    *   **Technical Explanation**: Why the failure occurred based on sensor correlations.
    *   **Suggested Action**: Immediate repair or maintenance step for the operator.

---

## 📋 Supported Failure Modes
The system currently monitors the following categories of failures based on **MAVLink** standards and fixed-wing physics:

| Category | Failure Type | Description | Trigger / Threshold |
| :--- | :--- | :--- | :--- |
| **Aerodynamics** | `STALL` | Airspeed is too low to maintain lift. Most critical for fixed-wing UAVs. | `< 12.5 m/s` (Critical) |
| **Sensors** | `PITOT_FAILURE` | Discrepancy between Airspeed and Groundspeed. Indicates a clogged sensor. | `Delta > 4.0 m/s` |
| **Propulsion** | `ENGINE_FAIL` | High throttle but altitude is dropping. Indicates motor/propeller loss. | `Throttle > 95%` + `Alt Drop` |
| **IMU** | `GYRO_FAULT` | Physical rotation rates exceed what the airframe is capable of. | `Rate > 120°/s` |
| **Attitude** | `UNUSUAL_ATTITUDE` | Extreme pitch or roll angles that risk a spin or crash. | `Pitch > 45°` / `Roll > 60°` |
| **Navigation** | `GPS_LOSS` | GPS fix type drops below 3D or coordinates jump to zero. | `fix_type < 3` |
| **Mechanical** | `SERVO_STALL` | Servo current spikes, suggesting a jammed control surface (flaps/ailerons). | `Current > 4.0 A` |
| **Mechanical** | `HIGH_VIBRATION` | Excessive shaking on X, Y, or Z axis. Indicates mechanical wear or damage. | `Vib > 1.2 m/s²` |
| **Power** | `LOW_BATTERY` | Battery level is insufficient for mission completion or safe return. | `< 15%` (Critical) |
| **Link** | `SIGNAL_LOSS` | Radio signal (RSSI) or Video quality drops below usable levels. | `RSSI < 50` / `Qual < 20%` |
| **Regulations**| `GEO_LIMIT` | Aircraft exceeded legal altitude limits for civil/military airspace. | `Alt > 120m AGL` |

## 🛡️ Failsafe Logic
When these failures are detected, the system generates a **Failure Report** which includes a recommended `failsafeAction`:
*   `SWITCH_TO_GPS`: Ignore airspeed and use groundspeed for navigation.
*   `RTL (Return to Launch)`: Automatically fly back to the takeoff point.
*   `EMERGENCY_LAND`: Immediate controlled descent to prevent flyaway.
*   `CONTINUE_MISSION`: Only for minor warnings (e.g., slight vibration).
