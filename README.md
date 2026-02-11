# Valentine's Website

This is a simple Valentine's website project that features interactive decision buttons, a heart-shaped header image, and a confetti animation. The application prompts users with a question and responds to their input with visual feedback.

## Features

- A heart-shaped header image at the top of the page.
- Two buttons: "Yes" and "No".
- The "No" button increases in size with repeated clicks.
- Confetti animation displayed when the "Yes" button is clicked.
- Redirects to WhatsApp when the "Yes" button is confirmed.

## Project Structure

```
valentines-website
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles
│   │   └── global.css
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Confetti.tsx
│   │   └── DecisionButtons.tsx
│   ├── assets
│   │   └── heart-header.svg
│   └── types
│       └── index.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd valentines-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server, run:
```
npm run dev
```

Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.