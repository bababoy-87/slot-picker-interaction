# 🕒 Time Slot Picker

A project I built out of frustration with most time pickers out there. I wanted something that actually lets you express real-world availability. Not just "anytime" or a single range, but as many precise slots as you need. Think: 7:30–9:00, then again 13:00–15:30, and so on. All with a clean, minimal, and accessible UI that feels great to use.

## ✨ Tech Stack

- `React`
- `TypeScript`
- `Framer Motion`
- `Tailwind CSS`
- `Vite`
- `clsx` + `tailwind-merge` for className composition

## 🚀 Features

- **Real Time Ranges:** Add as many slots as you want for each day. No more "anytime" nonsense.
- **Instant Input Focus:** Open a day's schedule and the first "From" input is ready to go. No extra clicks.
- **Accessibility First:**
  - The toggle is a real switch (`role="switch"`, `aria-checked`, `aria-label`), not just a styled button.
  - Every button and control is keyboard accessible.
  - No annoying focus rings, but still easy to navigate.
- **Apple-Inspired Polish:**
  - Soft, rounded corners, gentle shadows, and subtle transitions.
  - Outlined, pill-shaped inputs and buttons.
- **Minimal, Responsive Design:**
  - Looks great on desktop, adapts well to smaller screens.
- **No Distractions:**
  - No colored focus rings or weird chrome—just a subtle border change on focus.
  - Remove buttons are perfectly aligned for that satisfying visual harmony.
- **Clean Class Logic:**
  - I use a custom `cn` utility (combining `clsx` and `tailwind-merge`) to keep className logic tidy.

## 💭 Why I Made This

I kept running into time pickers that were either too basic or way too clunky. I wanted something that just works for real-life schedules—like when you're only available in the morning and then again in the evening. I obsessed over the details:

- The first input is always focused so you can just start typing.
- Every control is labeled and accessible.
- The UI is so clean, people say "wow" when they see it.
- No distractions, just clarity.

## 🚦 Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open `http://localhost:5173` in your browser

## 🎞️ Preview


https://github.com/user-attachments/assets/fd274f21-143e-43b4-9049-a1cb365151cd


