import { useState } from 'react'
import './App.css'
import MoodButton from "./MoodButton.tsx";

function App() {
  const [circleColor, setCircleColor] = useState<string>('bg-gray-300');
  const handleMoodClick = (color:string) => {
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
        <p className="py-5 text-center">Select a mood to change the circle colour</p>
      </div>
    </>
  )
}

export default App
