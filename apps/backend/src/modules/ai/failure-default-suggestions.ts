import { FailureLog, FailureType, Severity } from '@prisma/client';
import { AiAnalysis } from './ai.service';

type AnalysisRecordKey = `${FailureType}_${Severity}`;

type AnalysisRecord = Partial<Record<AnalysisRecordKey, AiAnalysis>>;
const DEFAULT_ANALYSIS_ENG: AnalysisRecord = {
  // ── HARDWARE ──────────────────────────────────────────────────────────────

  HARDWARE_CRITICAL: {
    explanation:
      'A critical hardware failure has been detected. One or more onboard systems ' +
      'are no longer operating within safe parameters.',
    root_cause:
      'Likely causes include mechanical damage, sensor malfunction, actuator stall, ' +
      'or propulsion system failure.',
    severity: Severity.CRITICAL,
    suggested_action:
      'Initiate Return-To-Launch (RTL) immediately. Do not attempt to continue mission. ' +
      'Inspect all mechanical components after landing.',
  },

  HARDWARE_WARNING: {
    explanation:
      'A hardware anomaly has been detected. The system is still operational but ' +
      'a parameter has exceeded its normal operating range.',
    root_cause:
      'Possible early-stage mechanical wear, increased load on a servo, ' +
      'propeller imbalance, or vibration from a loose component.',
    severity: Severity.WARNING,
    suggested_action:
      'Monitor the affected parameter closely. Reduce mission complexity if possible. ' +
      'Plan for inspection at the next available opportunity.',
  },

  HARDWARE_INFO: {
    explanation:
      'A hardware parameter has moved outside its optimal range but remains within ' +
      'acceptable operating limits.',
    root_cause:
      'Normal wear, environmental factors (temperature, humidity), or minor ' +
      'calibration drift.',
    severity: Severity.INFO,
    suggested_action:
      'Log the event and schedule a routine maintenance check. No immediate action required.',
  },

  // ── NETWORK ───────────────────────────────────────────────────────────────

  NETWORK_CRITICAL: {
    explanation:
      'The communication link between the aircraft and ground station has failed ' +
      'or degraded to an unusable level.',
    root_cause:
      'Likely causes include active REB (electronic warfare) jamming, the aircraft ' +
      'exceeding the radio range, antenna damage, or a telemetry timeout.',
    severity: Severity.CRITICAL,
    suggested_action:
      'The autopilot should activate its failsafe mode (RTL or loiter). ' +
      'Verify ground station antenna orientation. Check for REB activity in the area.',
  },

  NETWORK_WARNING: {
    explanation:
      'The communication link is degrading. Signal quality or RSSI is below ' +
      'the recommended threshold.',
    root_cause:
      'Possible causes include the aircraft approaching the edge of the radio ' +
      'coverage zone, partial REB interference, or obstacles between antennas.',
    severity: Severity.WARNING,
    suggested_action:
      'Redirect the aircraft toward the ground station. Increase antenna gain if possible. ' +
      'Monitor RSSI trend — if continuing to drop, prepare for RTL.',
  },

  NETWORK_INFO: {
    explanation:
      'A minor fluctuation in the communication link has been observed.',
    root_cause:
      'Transient RF interference, multipath fading, or temporary obstruction.',
    severity: Severity.INFO,
    suggested_action:
      'No immediate action required. Continue monitoring signal quality.',
  },

  // ── OTHER ─────────────────────────────────────────────────────────────────

  OTHER_CRITICAL: {
    explanation:
      'A critical flight-dynamics or regulatory violation has been detected ' +
      'that does not fall under a hardware or network category.',
    root_cause:
      'Possible causes include a stall condition, unusual attitude, terrain proximity, ' +
      'or airspace limit exceedance.',
    severity: Severity.CRITICAL,
    suggested_action:
      'Take immediate corrective action based on the specific failure description. ' +
      'If stall: increase throttle and lower nose. If terrain: climb immediately.',
  },

  OTHER_WARNING: {
    explanation:
      'A non-critical anomaly has been detected in the flight envelope or ' +
      'operational parameters.',
    root_cause:
      'The aircraft may be approaching a regulatory limit, pre-stall margin, ' +
      'or an unusual attitude that has not yet reached critical levels.',
    severity: Severity.WARNING,
    suggested_action:
      'Review the specific failure description and adjust flight parameters accordingly. ' +
      'Increase monitoring frequency.',
  },

  OTHER_INFO: {
    explanation:
      'An informational event has been logged. The aircraft is operating normally ' +
      'but a parameter of interest has been noted.',
    root_cause:
      'Routine operational boundary crossing (e.g. altitude advisory, waypoint reached).',
    severity: Severity.INFO,
    suggested_action: 'Acknowledge the event and continue monitoring.',
  },
};

const DEFAULT_ANALYSIS_UA: AnalysisRecord = {
  // ── АПАРАТНЕ ЗАБЕЗПЕЧЕННЯ ─────────────────────────────────────────────────

  HARDWARE_CRITICAL: {
    explanation:
      'Виявлено критичну відмову апаратного забезпечення. Один або кілька бортових ' +
      'систем вийшли за межі безпечних параметрів роботи.',
    root_cause:
      'Ймовірні причини: механічне пошкодження, несправність датчика, заклинювання ' +
      'виконавчого механізму або відмова силової установки.',
    severity: Severity.CRITICAL,
    suggested_action:
      'Негайно активувати повернення на базу (RTL). Не продовжувати виконання місії. ' +
      'Після посадки провести повну інспекцію механічних компонентів.',
  },

  HARDWARE_WARNING: {
    explanation:
      'Виявлено аномалію апаратного забезпечення. Система залишається працездатною, ' +
      'однак один із параметрів вийшов за межі нормального діапазону.',
    root_cause:
      'Можливі причини: початковий знос механічних компонентів, підвищене навантаження ' +
      'на сервопривід, дисбаланс повітряного гвинта або вібрація від незакріпленого елемента.',
    severity: Severity.WARNING,
    suggested_action:
      'Уважно відстежувати відповідний параметр. По можливості спростити виконання місії. ' +
      'Запланувати технічне обслуговування при першій можливості.',
  },

  HARDWARE_INFO: {
    explanation:
      'Параметр апаратного забезпечення вийшов за оптимальний діапазон, але залишається ' +
      'в межах допустимих робочих значень.',
    root_cause:
      'Звичайний знос, вплив навколишнього середовища (температура, вологість) ' +
      'або незначний дрейф калібрування.',
    severity: Severity.INFO,
    suggested_action:
      'Зафіксувати подію та запланувати планове технічне обслуговування. ' +
      'Негайних дій не потрібно.',
  },

  // ── МЕРЕЖА / КАНАЛ ЗВ'ЯЗКУ ───────────────────────────────────────────────

  NETWORK_CRITICAL: {
    explanation:
      "Канал зв'язку між апаратом та наземною станцією відмовив або деградував " +
      'до неприйнятного рівня.',
    root_cause:
      'Ймовірні причини: активне радіоелектронне придушення (РЕБ), вихід апарату за ' +
      'межі радіозони, пошкодження антени або таймаут телеметрії.',
    severity: Severity.CRITICAL,
    suggested_action:
      'Автопілот має активувати аварійний режим (RTL або лойтер). ' +
      "Перевірити орієнтацію антени наземної станції. З'ясувати наявність засобів РЕБ у районі.",
  },

  NETWORK_WARNING: {
    explanation:
      "Канал зв'язку деградує. Якість сигналу або показник RSSI опустилися " +
      'нижче рекомендованого порогу.',
    root_cause:
      'Можливі причини: наближення апарату до межі зони покриття, часткове ' +
      'придушення сигналу РЕБ або перешкоди між антенами.',
    severity: Severity.WARNING,
    suggested_action:
      'Перенаправити апарат у бік наземної станції. По можливості збільшити підсилення антени. ' +
      'Відстежувати тенденцію RSSI — при подальшому зниженні підготуватися до RTL.',
  },

  NETWORK_INFO: {
    explanation: "Зафіксовано незначне коливання якості каналу зв'язку.",
    root_cause:
      'Тимчасові радіозавади, завмирання сигналу або короткочасне перекриття.',
    severity: Severity.INFO,
    suggested_action:
      'Негайних дій не потрібно. Продовжувати моніторинг якості сигналу.',
  },

  // ── ІНШЕ ─────────────────────────────────────────────────────────────────

  OTHER_CRITICAL: {
    explanation:
      'Виявлено критичне порушення льотної динаміки або нормативних обмежень, ' +
      'що не відноситься до категорій апаратних або мережевих відмов.',
    root_cause:
      'Можливі причини: режим звалювання, незвичайне просторове положення, ' +
      'небезпечна близькість до поверхні або перевищення меж повітряного простору.',
    severity: Severity.CRITICAL,
    suggested_action:
      'Негайно вжити коригувальних заходів відповідно до опису конкретної відмови. ' +
      'При звалюванні: збільшити тягу та опустити ніс. При наближенні до землі: негайно набирати висоту.',
  },

  OTHER_WARNING: {
    explanation:
      'Виявлено некритичну аномалію в межах льотної обвідної або операційних параметрів.',
    root_cause:
      'Апарат може наближатися до нормативних обмежень, переднього краю зони звалювання ' +
      'або незвичайного просторового положення, яке ще не досягло критичного рівня.',
    severity: Severity.WARNING,
    suggested_action:
      'Ознайомитися з описом конкретної відмови та відповідно скоригувати параметри польоту. ' +
      'Збільшити частоту моніторингу.',
  },

  OTHER_INFO: {
    explanation:
      'Зафіксовано інформаційну подію. Апарат функціонує в штатному режимі, ' +
      'однак зареєстровано параметр, що заслуговує уваги.',
    root_cause:
      'Штатне перетинання межі параметра (наприклад, висотний поріг, досягнення точки маршруту).',
    severity: Severity.INFO,
    suggested_action: 'Підтвердити подію та продовжити моніторинг.',
  },
};

export function getDefaultSuggestion({
  failure,
  responseLang,
  //   uav,
}: {
  //   uav: UAsVdata;
  failure: FailureLog;
  responseLang: string;
}): AiAnalysis | null {
  const key: AnalysisRecordKey = `${failure.type}_${failure.severity}`;

  if (responseLang === 'ENG') {
    return DEFAULT_ANALYSIS_ENG[key] ? DEFAULT_ANALYSIS_ENG[key] : null;
  } else if (responseLang === 'UA') {
    return DEFAULT_ANALYSIS_UA[key] ? DEFAULT_ANALYSIS_UA[key] : null;
  }

  return null;
}
