import { X } from "lucide-react";
import React, { useState } from "react";
import { parseTimeInput } from "../utils/time";
import { cn } from "../utils/cn";

interface TimeSlotInputProps {
  from: string;
  to: string;
  onChange: (field: "from" | "to", value: string) => void;
  onRemove: () => void;
  autoFocus?: boolean;
}

export const TimeSlotInput: React.FC<TimeSlotInputProps> = ({
  from,
  to,
  onChange,
  onRemove,
  autoFocus,
}) => {
  const [fromValue, setFromValue] = useState(from);
  const [toValue, setToValue] = useState(to);

  React.useEffect(() => {
    setFromValue(from);
  }, [from]);
  React.useEffect(() => {
    setToValue(to);
  }, [to]);

  const handleBlur = (field: "from" | "to", value: string) => {
    const formatted = parseTimeInput(value);
    if (field === "from") setFromValue(formatted);
    else setToValue(formatted);
    onChange(field, formatted);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 w-full first:mt-4 mb-4 shrink-0 overflow-hidden"
      )}
    >
      <div className={cn("flex items-center gap-2")}>
        <span className={cn("text-zinc-500 text-sm")}>From</span>
        <input
          type="text"
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
          onBlur={(e) => handleBlur("from", e.target.value)}
          className={cn(
            "px-4 py-2 bg-white w-full rounded-lg border text-sm shadow-sm border-zinc-200 focus:border-zinc-400 focus:outline-none h-10 transition-border"
          )}
          autoFocus={!!autoFocus}
        />
      </div>
      <div className={cn("flex items-center gap-2")}>
        <span className={cn("text-zinc-500 text-sm")}>To</span>
        <input
          type="text"
          value={toValue}
          onChange={(e) => setToValue(e.target.value)}
          onBlur={(e) => handleBlur("to", e.target.value)}
          className={cn(
            "px-4 py-2 bg-white w-full rounded-lg border text-sm shadow-sm border-zinc-200 focus:border-zinc-400 focus:outline-none h-10 transition-border"
          )}
        />
      </div>
      <button
        onClick={onRemove}
        className={cn(
          "bg-zinc-100 rounded-lg flex items-center justify-center h-10 w-10 transition-shadow"
        )}
        type="button"
        style={{ minWidth: 40 }}
      >
        <X className={cn("size-4 text-zinc-900")} strokeWidth={1.5} />
      </button>
    </div>
  );
};
