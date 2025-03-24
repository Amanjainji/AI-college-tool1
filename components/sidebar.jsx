"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  FileText,
  BookOpen,
  MessageSquare,
  CheckSquare,
  Brain,
  Youtube,
  Calendar,
  Briefcase,
  Menu,
  X,
  Home,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Notes",
      path: "/notes",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Quiz",
      path: "/quiz",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "PYQ Analyzer",
      path: "/pyq",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Community",
      path: "/community",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <CheckSquare className="h-5 w-5" />,
    },
    {
      name: "Study Assistant",
      path: "/study-assistant",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      name: "YouTube OCR",
      path: "/youtube-ocr",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: "Career",
      path: "/career",
      icon: <Briefcase className="h-5 w-5" />,
    },
  ]

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">AI College Tool</h2>
          </div>
          <nav className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link href={route.path}>
                    <Button variant={pathname === route.path ? "secondary" : "ghost"} className="w-full justify-start">
                      {route.icon}
                      <span className="ml-2">{route.name}</span>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t">
            <Link href="/profile">
              <Button variant="outline" className="w-full">
                <span>Profile</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

