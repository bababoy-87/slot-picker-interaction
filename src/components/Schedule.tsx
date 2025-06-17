import React, { useState } from "react";
import { DaySchedule } from "./DaySchedule";
import type { TimeSlot } from "./DaySchedule";
import { generateRandomTime } from "../utils/time";

export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

interface DayScheduleState {
  enabled: boolean;
  timeSlots: TimeSlot[];
}

type WeekSchedule = Record<WeekDay, DayScheduleState>;

export const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState<WeekSchedule>({
    Monday: { enabled: false, timeSlots: [] },
    Tuesday: { enabled: false, timeSlots: [] },
    Wednesday: { enabled: false, timeSlots: [] },
    Thursday: { enabled: false, timeSlots: [] },
    Friday: { enabled: false, timeSlots: [] },
  });

  const handleToggleDay = (day: WeekDay) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled: !prev[day].enabled },
    }));
  };

  const handleAddSlot = (day: WeekDay) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: [
          ...prev[day].timeSlots,
          {
            id: Date.now().toString() + Math.random().toString(36).slice(2),
            from: generateRandomTime(),
            to: generateRandomTime(),
          },
        ],
      },
    }));
  };

  const handleRemoveSlot = (day: WeekDay, id: string) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: prev[day].timeSlots.filter((slot) => slot.id !== id),
      },
    }));
  };

  const handleChangeSlot = (
    day: WeekDay,
    id: string,
    field: "from" | "to",
    value: string
  ) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: prev[day].timeSlots.map((slot) =>
          slot.id === id ? { ...slot, [field]: value } : slot
        ),
      },
    }));
  };

  return (
    <div className="max-w-lg w-full mx-auto p-4 space-y-4">
      {Object.entries(schedule).map(([day, { enabled, timeSlots }]) => (
        <DaySchedule
          key={day}
          day={day}
          enabled={enabled}
          timeSlots={timeSlots}
          onToggle={() => handleToggleDay(day as WeekDay)}
          onAddSlot={() => handleAddSlot(day as WeekDay)}
          onRemoveSlot={(id) => handleRemoveSlot(day as WeekDay, id)}
          onChangeSlot={(id, field, value) =>
            handleChangeSlot(day as WeekDay, id, field, value)
          }
        />
      ))}
    </div>
  );
};
