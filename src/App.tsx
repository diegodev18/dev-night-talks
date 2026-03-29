import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "@/pages/Landing"
import Groups from "@/pages/Groups"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
