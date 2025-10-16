import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* Logo */}
      <img src={reactLogo} alt="React Logo" className="logo" />

      {/* Header */}
      <header className="header">
        <h1>REACT TUTORIAL</h1>
      </header>

      {/* Content */}
      <main className="content">
        <section>
          <h2>1. Introduction to React</h2>
          <p>
            React is a JavaScript library for building user interfaces. It allows
            developers to create reusable UI components.
          </p>
        </section>

        <section>
          <h2>2. Components</h2>
          <p>
            Components are the building blocks of React. Each component can manage
            its own state and render UI.
          </p>
        </section>

        <section>
          <h2>3. JSX</h2>
          <p>
            JSX is a syntax extension that looks like HTML but is actually
            JavaScript. It makes writing UI components easier.
          </p>
        </section>

        <section>
          <h2>4. State & Props</h2>
          <p>
            State is used to manage data within a component, while props are used
            to pass data between components.
          </p>
        </section>

        <section>
          <h2>5. Hooks</h2>
          <p>
            Hooks like useState and useEffect allow functional components to have
            state and lifecycle methods.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App





