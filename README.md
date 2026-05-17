# react-state-task 🚀

This project is a simple React application demonstrating state management with the `useState` hook. It allows users to interact with a "mood circle" by clicking buttons, which dynamically changes the color of the circle based on the selected mood.

## Features ✨

*   **Dynamic State Updates**: Changes the visual appearance of an element based on user interaction and application state.
*   **Component Reusability**: Features a reusable `MoodButton` component.
*   **Tailwind CSS Integration**: Utilizes Tailwind CSS for styling.
*   **React Compiler**: Leverages the React Compiler for potential performance optimizations.
*   **TypeScript Support**: Built with TypeScript for enhanced code quality and maintainability.

## Tech Stack 💻

*   **Frontend Library**: React
*   **Language**: TypeScript, JavaScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS, PostCSS, Autoprefixer
*   **Linting**: ESLint
*   **Compiler**: React Compiler (via `@rolldown/plugin-babel`)
*   **Dependencies**:
    *   `react`
    *   `react-dom`
    *   `@vitejs/plugin-react`
    *   `@tailwindcss/vite`
    *   `tailwindcss`
    *   `@babel/core`
    *   `@rolldown/plugin-babel`
    *   `typescript`
    *   `eslint`
    *   `globals`
    *   `@eslint/js`
    *   `@types/react`
    *   `@types/react-dom`
    *   `@types/babel__core`
    *   `@types/node`
    *   `eslint-plugin-react-hooks`
    *   `eslint-plugin-react-refresh`
    *   `postcss`

## Installation 📦

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-state-task.git
    cd react-state-task
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Usage ⚡

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

    This will start the Vite development server, and the application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

2.  **Interact with the Mood Circle:**
    *   Open the application in your browser.
    *   Click on the "Happy", "Sad", "Energetic", or "Calm" buttons.
    *   Observe the color of the central "mood circle" changing accordingly.

### Example Interaction

When you click the "Happy" button, the `handleMoodClick` function in `src/App.tsx` is called with the argument `'bg-yellow-400'`. This updates the `circleColor` state variable, which in turn changes the `class` attribute of the mood circle `div`, resulting in a yellow background.

```tsx
// src/App.tsx
import { useState } from 'react';
import './App.css';
import MoodButton from "./MoodButton.tsx";

function App() {
  const [circleColor, setCircleColor] = useState<string>('bg-gray-300');

  const handleMoodClick = (color: string) => {
    setCircleColor(color);
  };

  return (
    <>
      <div className="mood-circle-container">
        <h1 className="text-6xl text-black text-center">Mood Circle</h1>
        <div className={`w-32 h-32 rounded-full ${circleColor} mx-auto my-8`}></div>
        <div className="flex gap-4 justify-center">
          <div className="flex gap-4 justify-center">
            <MoodButton mood="Happy" onClick={() => handleMoodClick('bg-yellow-400')} />
            <MoodButton mood="Sad" onClick={() => handleMoodClick('bg-blue-400')} />
            <MoodButton mood="Energetic" onClick={() => handleMoodClick('bg-orange-400')} />
            <MoodButton mood="Calm" onClick={() => handleMoodClick('bg-green-400')} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
```

## Project Structure 📂

```
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── MoodButton.tsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

*   **`public/`**: Contains static assets like favicons.
*   **`src/`**: Houses the main application code.
    *   **`assets/`**: Images and other static assets used within the application.
    *   **`App.tsx`**: The main application component.
    *   **`MoodButton.tsx`**: A reusable component for mood selection buttons.
    *   **`main.tsx`**: The entry point of the React application.
*   **`vite.config.ts`**: Vite build tool configuration.
*   **`eslint.config.js`**: ESLint configuration for code linting.
*   **`tsconfig.json`**: TypeScript configuration for the project.

## Configuration ⚙️

This project does not require any specific environment variables for basic functionality. Tailwind CSS is configured in `tailwind.config.js` (not provided in the prompt but assumed to exist and be configured for basic usage).

## Contributing 🤝

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and ensure they adhere to the project's coding standards.
4.  Submit a pull request.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.