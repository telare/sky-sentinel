# 📊 SkySentinel: Execution Result Analysis

This document provides a technical breakdown of the system's performance and diagnostic accuracy based on the logs in `docs/result.txt`.

---

## 1. Executive Summary
The test run demonstrated a successful connection between the **UAV Simulator (Python)** and the **Backend (NestJS)**. However, the session revealed a significant discrepancy in the data integrity layer (XOR Checksum) while successfully triggering the programmed failure diagnostic blocks.

---

## 2. Technical Issue: Checksum Mismatches
The most frequent log entry was:
`[Валідація] Чексума невідповідність! Очікуване: XX, Отримане: YY`

### **Root Cause Analysis**
*   **Validation Sensitivity:** The XOR checksum is extremely sensitive to string formatting. Even a minor difference in how Python vs. JavaScript serializes data (e.g., `85.0` vs `85` or `0.8` vs `0.80000000000000004`) results in a total checksum mismatch.
*   **Packet Rejection:** Approximately **75% of telemetry packets** were rejected by the backend. 
*   **Observation:** Packets that successfully passed (e.g., IDs 2, 3, 10, 15, 30, 43, 61–67) typically had stable, non-fluctuating floating-point values.

---

## 3. Failure Injection Scenarios & Diagnostics
Despite the checksum issues, the backend successfully processed packets during the "Failure Windows":

### **A. Scenario: Pitot Tube Failure (IDs 21–29)**
*   **Simulator State:** `airspeed` forced to 15 km/h while `groundSpeed` remained ~85 km/h.
*   **Diagnosis:** The `FailuresService` successfully identified the **Analytical Redundancy** mismatch (Delta > 15 km/h) and logged a **WARNING** for hardware inconsistency.

### **B. Scenario: Propulsion System Failure (IDs 41–49)**
*   **Simulator State:** `throttle` at 95.0% while `verticalSpeed` dropped to -4.2 m/s.
*   **Diagnosis:** The backend processed Packet ID 43, correctly triggering a **CRITICAL** propulsion failure log ("High throttle but losing altitude!").

### **C. Scenario: Servo Stall (IDs 61–69)**
*   **Simulator State:** `servoCurrent` spiked to 4.5A (Stall current).
*   **Diagnosis:** Interestingly, this window had the **highest checksum success rate**. The data was successfully transmitted to the UI, providing a clear visual indication of high current draw.

---

## 4. System Warnings
*   **Python Deprecation:** `datetime.utcnow()` is used in the simulator. It should be replaced with `datetime.now(datetime.UTC)` to comply with modern Python standards and avoid future breaks.

---

## 5. Recommendations for Improvement
1.  **Data Normalization:** Implement a strict rounding or formatting step in both Python and NestJS (e.g., `round(val, 2)`) before calculating the checksum.
2.  **Heartbeat Optimization:** The `Telemetry Timeout` logic works well, but with high packet loss from checksums, it may trigger false positives for "Link Lost".
3.  **JSON Serialization:** Ensure both systems use the same sorting and spacing rules for JSON stringification to stabilize the validation layer.
