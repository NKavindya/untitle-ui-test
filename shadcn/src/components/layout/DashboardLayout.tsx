import Sidebar from "./Sidebar"
import Header from "./Header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      {/* Main Container - Light Grey with Rounded Corners */}
      <div className="w-full max-w-[1600px] h-[calc(100vh-2rem)] bg-gray-100 rounded-lg flex flex-col overflow-hidden shadow-2xl">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 bg-white overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout

