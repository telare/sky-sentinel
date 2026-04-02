import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface AiRecommendationsProps {
  rootCause: string;
  explanation: string;
  suggestedAction: string;
}

export function AiRecommendations({
  rootCause,
  explanation,
  suggestedAction,
}: AiRecommendationsProps) {
  const [typedText, setTypedText] = useState("");
  const { t } = useTranslation();

  // Simulated AI typing effect
  // todo make this as custom hook
  useEffect(() => {
    let currentLength = 0;
    const typingInterval = setInterval(() => {
      if (currentLength <= explanation.length) {
        setTypedText(explanation.slice(0, currentLength));
        currentLength += 2; // Adjust speed here
      }
      else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [explanation]);

  return (
    <div className="flex flex-col space-y-3 h-full">
      <h3 className="text-sm font-medium text-slate-300">{t("aiAnalyzeModal.panels.aiAnalysis.title")}</h3>

      <div className="flex-1 border border-slate-800 rounded-lg overflow-hidden flex flex-col bg-slate-900/30">
        {/* Root Cause Section */}
        <div className="border-b border-rose-900/50 bg-rose-950/10 p-3">
          <h4 className="text-xs font-semibold text-rose-500 tracking-widest uppercase">
            {t("aiAnalyzeModal.status.rootCause")}
            :
            {rootCause}
          </h4>
        </div>

        {/* Explanation Section */}
        <div className="p-4 flex-1">
          <h5 className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase mb-2">
            {t("aiAnalyzeModal.panels.aiAnalysis.explanation")}
          </h5>
          <p className=" text-sm text-slate-300 leading-relaxed min-h-20">
            {typedText}
            <span className="inline-block w-2 h-4 ml-1 bg-slate-400 animate-pulse translate-y-1" />
          </p>
        </div>

        {/* Suggested Action Box */}
        <div className="p-4">
          <h5 className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase mb-2">
            {t("aiAnalyzeModal.panels.aiAnalysis.suggestedAction")}
          </h5>
          <div className="bg-amber-950/40 border border-amber-600/50 rounded p-3 text-sm text-amber-200/90 leading-relaxed shadow-[0_0_15px_rgba(217,119,6,0.1)]">
            {suggestedAction}
          </div>
        </div>
      </div>
    </div>
  );
}
