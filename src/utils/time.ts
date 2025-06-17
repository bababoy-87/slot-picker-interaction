export function generateRandomTime() {
  const hour = Math.floor(Math.random() * 12) || 12;
  const minute = Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, "0");
  const period = Math.random() > 0.5 ? "AM" : "PM";
  return `${hour}:${minute} ${period}`;
}

// Formats loose user input into a standard time string like '07:00 AM'.
export function parseTimeInput(input: string): string {
  let str = input.trim().toLowerCase().replace(/\s+/g, "");
  let hour = 0;
  let minute = 0;
  let isPM = false;
  let isAM = false;

  if (str.endsWith("am")) {
    isAM = true;
    str = str.replace("am", "");
  } else if (str.endsWith("pm")) {
    isPM = true;
    str = str.replace("pm", "");
  }

  if (str.includes(":")) {
    const [h, m] = str.split(":");
    hour = parseInt(h, 10);
    minute = parseInt(m, 10) || 0;
  } else if (str.length >= 3 && str.length <= 4) {
    const padded = str.padStart(4, "0");
    hour = parseInt(padded.slice(0, 2), 10);
    minute = parseInt(padded.slice(2, 4), 10);
  } else if (str.length > 0) {
    hour = parseInt(str, 10);
    minute = 0;
  }

  hour = Math.max(0, Math.min(hour, 23));
  minute = Math.max(0, Math.min(minute, 59));

  if (isAM || isPM) {
    if (hour === 0) hour = 12;
    if (hour > 12) hour = hour % 12;
    if (isPM && hour !== 12) hour += 12;
  }

  let period = "AM";
  let displayHour = hour;
  if (!isAM && !isPM) {
    if (hour === 0) {
      displayHour = 12;
      period = "AM";
    } else if (hour === 12) {
      displayHour = 12;
      period = "PM";
    } else if (hour > 12) {
      displayHour = hour - 12;
      period = "PM";
    } else {
      displayHour = hour;
      period = "AM";
    }
  } else {
    if (hour === 0 || hour === 12) {
      displayHour = 12;
    } else if (hour > 12) {
      displayHour = hour - 12;
    } else {
      displayHour = hour;
    }
    period = isPM ? "PM" : "AM";
  }

  return `${displayHour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")} ${period}`;
}
