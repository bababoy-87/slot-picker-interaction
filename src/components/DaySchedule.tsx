import { motion, AnimatePresence } from "motion/react";
import { TimeSlotInput } from "./TimeSlotInput";
import React from "react";

export interface TimeSlot {
  id: string;
  from: string;
  to: string;
}

interface DayScheduleProps {
  day: string;
  enabled: boolean;
  timeSlots: TimeSlot[];
  onToggle: () => void;
  onAddSlot: () => void;
  onRemoveSlot: (id: string) => void;
  onChangeSlot: (id: string, field: "from" | "to", value: string) => void;
}

export const DaySchedule: React.FC<DayScheduleProps> = ({
  day,
  enabled,
  timeSlots,
  onToggle,
  onAddSlot,
  onRemoveSlot,
  onChangeSlot,
}) => (
  <motion.div
    layout
    className={`bg-white p-8 border w-full overflow-hidden ${
      enabled ? "shadow-sm border-zinc-200" : "border-zinc-50/50"
    }`}
    style={{
      borderRadius: 20,
      backgroundColor: enabled ? "#fff" : "transparent",
      height: enabled ? "auto" : 62,
    }}
  >
    <motion.div layout className="flex justify-between items-center mb-4">
      <h2 className="text-base text-zinc-600 font-medium">{day}</h2>
      <motion.button
        onClick={onToggle}
        className={`w-11 h-6 rounded-full flex items-center transition-colors duration-200 ${
          enabled ? "bg-green-600" : "bg-zinc-200"
        }`}
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={`Toggle ${day} schedule`}
        tabIndex={0}
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full shadow-md"
          animate={{ x: enabled ? 24 : 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.button>
    </motion.div>
    <AnimatePresence>
      {enabled && (
        <motion.div layout className="w-full">
          {timeSlots.map((slot, idx) => (
            <TimeSlotInput
              key={slot.id}
              from={slot.from}
              to={slot.to}
              onChange={(field, value) => onChangeSlot(slot.id, field, value)}
              onRemove={() => onRemoveSlot(slot.id)}
              autoFocus={idx === 0}
            />
          ))}
          <motion.button
            layout
            onClick={onAddSlot}
            className="w-full mt-4 py-3 bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-700 rounded-lg flex items-center justify-center gap-2 text-sm tracking-wide border border-zinc-200 hover:border-zinc-300 shadow-sm transition-colors duration-150"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            key={`${day}-add`}
            type="button"
            aria-label={`Add time slot for ${day}`}
          >
            <span>Add More</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);
