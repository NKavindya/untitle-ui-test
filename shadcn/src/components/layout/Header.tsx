import { Moon, Globe, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="text-xs text-gray-500 font-medium">Dashboard_Layout_Light</div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
          <Moon className="w-4 h-4 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
          <Globe className="w-4 h-4 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
          <Settings className="w-4 h-4 text-gray-600" />
        </Button>
        <div className="flex items-center gap-2 ml-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
            <User className="w-4 h-4 text-gray-600" />
          </Button>
          <span className="text-sm text-gray-700 font-medium">username</span>
        </div>
      </div>
    </div>
  )
}

export default Header

