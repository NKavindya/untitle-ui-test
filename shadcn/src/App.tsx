import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashboardLayout from "@/components/layout/DashboardLayout"
import DashboardPage from "@/pages/DashboardPage"

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App



