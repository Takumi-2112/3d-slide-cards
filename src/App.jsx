import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThreeDMarqueeDemo as ThreeDMarquee } from './ThreeDMarquee'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ThreeDMarquee/>
    </div>
  )
}

export default App
