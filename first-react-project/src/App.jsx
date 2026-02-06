import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">My React Cards</h1>
      <div className="card-container">
        <Card
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          title="Beach Paradise"
          description="Relax by the ocean and enjoy the sunset views."
        />

        <Card
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          title="Mountain Escape"
          description="Find peace in the mountains surrounded by nature."
        />

        <Card
          image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
          title="City Lights"
          description="Experience the vibrant nightlife of the city."
        />
      </div>
    </div>
  )
}

export default App








