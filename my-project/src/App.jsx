import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Landing/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        <h1 className="text-3xl font-bold underline">
          Hello world!
          <Welcome />
        </h1>
      </p>
    </>
  )
}

export default App
