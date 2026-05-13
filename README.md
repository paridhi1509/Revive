# Revive 🌿

A mental health & wellness web app built to help you take care of your mind — one day at a time.

## What is this?

Revive is a simple web-based tool we built for anyone who wants to:

- **Track their mood** daily and see how it changes over a month
- **Write journal entries** to get thoughts out of their head
- **Practice breathing exercises** when things feel overwhelming
- **Talk to a chatbot** that understands common mental health concerns
- **Find helpline numbers** quickly when they (or someone they know) needs professional support

It's not a replacement for therapy or professional help — it's just a small thing that might make your day a little easier.

## Features

🧘 **Self Care** — Guided 4-7-8 breathing exercise with an interactive animated circle. Start it, follow along, stop whenever you want.

📊 **Mood Tracker** — A color-coded grid that shows your mood across morning, afternoon, and night for every day of the month. Click any block to change it. Your data stays in your browser (localStorage).

📔 **Journal** — Write quick entries with a title and some text. They're saved locally so you don't lose them between sessions.

🤖 **Chatbot** — A keyword-based chat assistant that can respond to topics like stress, anxiety, loneliness, exam pressure, relationships, sleep issues, and more. It's not AI-powered (no API needed) — it runs entirely in your browser.

📞 **Helplines** — Quick access to Indian mental health helplines (Vandrevala Foundation, iCall, Roshni, VIMHANS) with click-to-call buttons.

## Tech Stack

Nothing fancy:
- HTML, CSS, JavaScript
- No frameworks, no build tools, no npm packages needed
- Just open `index.html` in your browser and you're good to go

## How to Run

1. Clone the repo
2. Open `index.html` in any browser
3. That's it

Or if you want to use a local server:
```
npx http-server . -p 8080
```
Then go to `http://localhost:8080/index.html`

## Login

There are a few hardcoded accounts for demo purposes. You can also click **"Continue as Guest"** to skip login entirely.

## Project Structure

```
├── index.html       # Landing page
├── LS1.html           # Login page
├── Menu1.html         # Dashboard with feature cards
├── moodttracker.html  # Mood tracker + journal
├── chatbot.html       # Chat interface
├── chatbot.js         # Chatbot response engine
├── main.js            # Mood tracker + journal logic
├── sc1.html           # Self care / breathing exercise
├── or.html            # Helplines & resources
├── styles.css         # Shared design system
├── revive.png         # Logo
└── favicon.png        # Favicon
```

## Color Palette

The UI uses a soft, calming palette:

- Slate Blue `#5B6D8A`
- Light Periwinkle `#C4D4E8`
- Warm Peach `#DEC4AD`
- Sage Mist `#C5D1C5`
- Muted Teal `#7A9E9B`

## Contributing

If you want to add more chatbot responses, improve the mood tracker, or make the UI better — PRs are welcome. Just keep it simple and accessible.

## Note

This project was built with care but it's not a substitute for professional mental health support. If you or someone you know is struggling, please reach out to a professional or call one of the helplines listed in the app.

---

*Built with ❤️ for mental health awareness.*
