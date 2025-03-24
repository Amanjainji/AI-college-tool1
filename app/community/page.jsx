import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Search, Hash, Plus, Send } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Community</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Channels</CardTitle>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative px-4 py-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search channels..." className="pl-8" />
              </div>
              <div className="space-y-1 px-2 py-2">
                {["general", "study-groups", "announcements", "help-desk", "off-topic"].map((channel) => (
                  <Button key={channel} variant="ghost" className="w-full justify-start">
                    <Hash className="h-4 w-4 mr-2" />
                    {channel}
                  </Button>
                ))}
              </div>
            </CardContent>
            <CardHeader className="pb-2 pt-2">
              <div className="flex items-center justify-between">
                <CardTitle>Direct Messages</CardTitle>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1 px-2 py-2">
                {["Alex Smith", "Jamie Chen", "Taylor Wong", "Jordan Lee"].map((user) => (
                  <Button key={user} variant="ghost" className="w-full justify-start">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>{user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {user}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-2 border-b">
              <div className="flex items-center">
                <Hash className="h-5 w-5 mr-2" />
                <CardTitle>general</CardTitle>
              </div>
              <CardDescription>General discussion for all students</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((message) => (
                  <div key={message} className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarFallback>{message % 2 === 0 ? "A" : "J"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold">{message % 2 === 0 ? "Alex Smith" : "Jamie Chen"}</h4>
                        <span className="text-xs text-muted-foreground">Today at 2:{message}0 PM</span>
                      </div>
                      <p className="text-sm">
                        {message % 2 === 0
                          ? "Has anyone started working on the group project yet? I'm thinking we should meet up this weekend to discuss our approach."
                          : "I've been looking at some resources for our project. I'll share them in our study group channel later today."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-3">
              <div className="flex w-full items-center space-x-2">
                <Textarea placeholder="Type a message..." className="min-h-[40px] flex-1" />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

