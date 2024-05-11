import { AnimatePresence } from "framer-motion"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="w-screen h-screen">
      <AnimatePresence mode="wait">
        <Outlet/>
      </AnimatePresence>
    </div>
  )
}

export default App
