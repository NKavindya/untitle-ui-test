import { Home, Star, Users, Settings as SettingsIcon, Database, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  icon: React.ElementType
  active?: boolean
}

const Sidebar = () => {
  const primaryNav: NavItem[] = [
    { label: "Main Dashboard", icon: Home, active: true },
    { label: "Net Generation", icon: Star },
    { label: "Gen Forecast", icon: Star },
    { label: "Solar Control", icon: Star },
  ]

  const pureGenerationNav: NavItem[] = [
    { label: "Overview", icon: Star },
    { label: "Inverters", icon: Star },
    { label: "Plants", icon: Star },
    { label: "EPC", icon: Users },
    { label: "Settings", icon: SettingsIcon },
    { label: "Data Collection", icon: Database },
    { label: "Plant Registration", icon: FileText },
  ]

  const userManagementNav: NavItem[] = [
    { label: "User Management", icon: Users },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <SettingsIcon className="w-5 h-5 text-gray-700" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">REMS</h1>
        </div>
        <p className="text-xs text-gray-500 ml-11 leading-relaxed">
          Renewable Energy Management System
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {/* Primary Navigation */}
        <div className="px-4 space-y-1">
          {primaryNav.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.label}
                variant={item.active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-10",
                  item.active && "bg-amber-100 hover:bg-amber-100 text-amber-900 font-medium"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </Button>
            )
          })}
        </div>

        {/* PURE GENERATION Section */}
        <div className="px-4 mt-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
            PURE GENERATION
          </h3>
          <div className="space-y-1">
            {pureGenerationNav.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start gap-3 text-gray-700 hover:bg-gray-50 h-10"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Button>
              )
            })}
          </div>
        </div>

        <Separator className="my-4 mx-4" />

        {/* User Management */}
        <div className="px-4">
          {userManagementNav.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-3 text-gray-700 hover:bg-gray-50"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar

