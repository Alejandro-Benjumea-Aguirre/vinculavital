import { Check } from "lucide-react";

export default function Stepper({ pasos, pasoActual }) {
  return (
    <div className="flex items-center w-full">
      {pasos.map((paso, i) => (
        <div key={paso} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`step-dot w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                i < pasoActual
                  ? "bg-brand-primary text-white"
                  : i === pasoActual
                  ? "bg-brand-accent text-white"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {i < pasoActual ? <Check size={16} /> : i + 1}
            </div>
            <span
              className={`text-[11px] text-center max-w-[70px] ${
                i <= pasoActual ? "text-gray-700 font-medium" : "text-gray-400"
              }`}
            >
              {paso}
            </span>
          </div>
          {i < pasos.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-1 ${
                i < pasoActual ? "bg-brand-primary" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
