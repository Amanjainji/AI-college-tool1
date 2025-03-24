import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Mail, BookOpen, Calendar, Clock, Award, FileText, CheckSquare, Brain, Shield } from "lucide-react"

export default function ProfilePage() {

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <CardTitle>Aman Jain</CardTitle>
                    <CardDescription>Computer Science Student</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">amanjain@university.edu</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Computer Science, Minor in Mathematics</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Expected Graduation: May 2027</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Joined: September 2023</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "JavaScript", "React", "Data Structures", "Machine Learning"].map((skill) => (
                        <Badge key={skill} variant="outline" className="font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Web Development", "AI", "Data Science", "Mobile Apps", "Cybersecurity"].map((interest) => (
                        <Badge key={interest} variant="secondary" className="font-normal">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Summary</CardTitle>
                    <CardDescription>Your recent activity across the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold">24</span>
                        <span className="text-sm text-muted-foreground">Notes Created</span>
                      </div>

                      <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                          <CheckSquare className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold">42</span>
                        <span className="text-sm text-muted-foreground">Tasks Completed</span>
                      </div>

                      <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                          <Brain className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold">18</span>
                        <span className="text-sm text-muted-foreground">Quizzes Taken</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
                      <div className="space-y-3">
                        {[
                          { action: "Created a note", subject: "Data Structures: Binary Trees", time: "2 hours ago" },
                          { action: "Completed a quiz", subject: "Algorithms Fundamentals", time: "Yesterday" },
                          { action: "Analyzed PYQ", subject: "Computer Networks Final 2024", time: "2 days ago" },
                          { action: "Generated flashcards", subject: "Operating Systems Concepts", time: "3 days ago" },
                          { action: "Completed task", subject: "Submit Programming Assignment", time: "4 days ago" },
                        ].map((activity, index) => (
                          <div key={index} className="flex items-start p-3 border rounded-md">
                            <div className="mr-3 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">
                                {activity.action}: {activity.subject}
                              </p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Badges and milestones you've earned</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: "Early Adopter", icon: Award, description: "Joined during beta phase", earned: true },
                        { name: "Note Master", icon: FileText, description: "Created 20+ notes", earned: true },
                        { name: "Quiz Whiz", icon: Brain, description: "Scored 90%+ on 10 quizzes", earned: true },
                        { name: "Task Champion", icon: CheckSquare, description: "Completed 50 tasks", earned: false },
                        {
                          name: "Study Streak",
                          icon: Calendar,
                          description: "Studied for 7 consecutive days",
                          earned: true,
                        },
                        { name: "Community Contributor", icon: User, description: "Helped 5+ students", earned: false },
                        { name: "AI Explorer", icon: Brain, description: "Used all AI features", earned: true },
                        {
                          name: "Perfect Planner",
                          icon: Calendar,
                          description: "Created a complete study plan",
                          earned: false,
                        },
                      ].map((badge, index) => (
                        <div
                          key={index}
                          className={`flex flex-col items-center justify-center p-4 border rounded-lg text-center ${!badge.earned ? "opacity-50" : ""}`}
                        >
                          <div className={`p-3 rounded-full mb-2 ${badge.earned ? "bg-primary/10" : "bg-muted"}`}>
                            <badge.icon
                              className={`h-6 w-6 ${badge.earned ? "text-primary" : "text-muted-foreground"}`}
                            />
                          </div>
                          <span className="text-sm font-medium">{badge.name}</span>
                          <span className="text-xs text-muted-foreground mt-1">{badge.description}</span>
                          {!badge.earned && <span className="text-xs text-muted-foreground mt-1">Not earned yet</span>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Study Analytics</CardTitle>
                  <CardDescription>Your study patterns and productivity metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Weekly Study Hours</h3>
                      <div className="h-[200px] bg-muted rounded-md flex items-end justify-between p-4">
                        {[35, 60, 45, 80, 50, 30, 20].map((height, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="w-10 bg-primary rounded-t-sm" style={{ height: `${height}%` }}></div>
                            <span className="text-xs mt-2">
                              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Subject Distribution</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-md">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Study Time</span>
                            <span className="text-sm text-muted-foreground">Total: 28 hours</span>
                          </div>
                          <div className="space-y-3">
                            {[
                              { subject: "Computer Science", percentage: 40, color: "bg-blue-500" },
                              { subject: "Mathematics", percentage: 25, color: "bg-green-500" },
                              { subject: "Physics", percentage: 20, color: "bg-yellow-500" },
                              { subject: "English", percentage: 10, color: "bg-purple-500" },
                              { subject: "History", percentage: 5, color: "bg-red-500" },
                            ].map((item, index) => (
                              <div key={index}>
                                <div className="flex justify-between text-xs mb-1">
                                  <span>{item.subject}</span>
                                  <span>{item.percentage}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className={`h-full ${item.color}`}
                                    style={{ width: `${item.percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 border rounded-md">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Task Completion</span>
                            <span className="text-sm text-muted-foreground">Total: 42 tasks</span>
                          </div>
                          <div className="space-y-3">
                            {[
                              { subject: "Computer Science", percentage: 45, color: "bg-blue-500" },
                              { subject: "Mathematics", percentage: 30, color: "bg-green-500" },
                              { subject: "Physics", percentage: 15, color: "bg-yellow-500" },
                              { subject: "English", percentage: 5, color: "bg-purple-500" },
                              { subject: "History", percentage: 5, color: "bg-red-500" },
                            ].map((item, index) => (
                              <div key={index}>
                                <div className="flex justify-between text-xs mb-1">
                                  <span>{item.subject}</span>
                                  <span>{item.percentage}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className={`h-full ${item.color}`}
                                    style={{ width: `${item.percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Performance Metrics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-md">
                          <div className="flex flex-col items-center">
                            <div className="relative h-24 w-24">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold">85%</span>
                              </div>
                              <svg className="h-24 w-24" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="none"
                                  stroke="hsl(var(--primary))"
                                  strokeWidth="10"
                                  strokeDasharray="251.2"
                                  strokeDashoffset="37.68"
                                  strokeLinecap="round"
                                  transform="rotate(-90 50 50)"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium mt-2">Quiz Accuracy</span>
                          </div>
                        </div>

                        <div className="p-4 border rounded-md">
                          <div className="flex flex-col items-center">
                            <div className="relative h-24 w-24">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold">92%</span>
                              </div>
                              <svg className="h-24 w-24" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="none"
                                  stroke="hsl(var(--primary))"
                                  strokeWidth="10"
                                  strokeDasharray="251.2"
                                  strokeDashoffset="20.1"
                                  strokeLinecap="round"
                                  transform="rotate(-90 50 50)"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium mt-2">Task Completion</span>
                          </div>
                        </div>

                        <div className="p-4 border rounded-md">
                          <div className="flex flex-col items-center">
                            <div className="relative h-24 w-24">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold">78%</span>
                              </div>
                              <svg className="h-24 w-24" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="none"
                                  stroke="hsl(var(--primary))"
                                  strokeWidth="10"
                                  strokeDasharray="251.2"
                                  strokeDashoffset="55.26"
                                  strokeLinecap="round"
                                  transform="rotate(-90 50 50)"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium mt-2">Study Efficiency</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                  <CardDescription>Your progress across different subjects and topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { subject: "Data Structures & Algorithms", progress: 75, topics: 12, completed: 9 },
                        { subject: "Database Systems", progress: 60, topics: 10, completed: 6 },
                        { subject: "Web Development", progress: 85, topics: 15, completed: 13 },
                        { subject: "Machine Learning", progress: 40, topics: 8, completed: 3 },
                      ].map((subject, index) => (
                        <div key={index} className="p-4 border rounded-md">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{subject.subject}</span>
                            <span className="text-sm text-muted-foreground">
                              {subject.completed}/{subject.topics} topics
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                            <div className="h-full bg-primary" style={{ width: `${subject.progress}%` }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>{subject.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Recent Achievements</h3>
                      <div className="space-y-3">
                        {[
                          {
                            achievement: "Completed 'Introduction to Algorithms' course",
                            date: "2 days ago",
                            points: 50,
                          },
                          { achievement: "Scored 95% on Database Systems quiz", date: "1 week ago", points: 30 },
                          { achievement: "Created 10 flashcard sets", date: "2 weeks ago", points: 25 },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                            <div className="flex items-center">
                              <div className="bg-primary/10 p-2 rounded-full mr-3">
                                <Award className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{item.achievement}</p>
                                <p className="text-xs text-muted-foreground">{item.date}</p>
                              </div>
                            </div>
                            <Badge variant="secondary">+{item.points} pts</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Productivity Score</CardTitle>
                  <CardDescription>Your overall productivity metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 mb-4">
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold">82</span>
                        <span className="text-sm text-muted-foreground">out of 100</span>
                      </div>
                      <svg className="h-40 w-40" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="10"
                          strokeDasharray="251.2"
                          strokeDashoffset="45.22"
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>

                    <div className="w-full space-y-3 mt-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Task Completion</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: "92%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Study Consistency</span>
                          <span className="font-medium">78%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: "78%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Focus Time</span>
                          <span className="font-medium">85%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: "85%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Learning Efficiency</span>
                          <span className="font-medium">75%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Study Streaks</CardTitle>
                  <CardDescription>Your consecutive study days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">7 Days</div>
                      <p className="text-sm text-muted-foreground mt-1">Current Streak</p>
                    </div>

                    <div className="w-full mt-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Last 14 Days</span>
                        <span className="text-sm text-muted-foreground">12/14 days</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1].map((day, index) => (
                          <div
                            key={index}
                            className={`h-8 rounded-md flex items-center justify-center ${
                              day === 1 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {index + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full mt-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Longest Streak</span>
                        <span className="font-medium">14 days</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Average Study Time</span>
                        <span className="font-medium">2.5 hours/day</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Total Study Days</span>
                        <span className="font-medium">87 days</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Usage</CardTitle>
                  <CardDescription>Your AI feature utilization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Feature Usage</h3>
                      <div className="space-y-3">
                        {[
                          { feature: "Note Summarization", usage: 85, color: "bg-blue-500" },
                          { feature: "Quiz Generation", usage: 70, color: "bg-green-500" },
                          { feature: "PYQ Analysis", usage: 45, color: "bg-yellow-500" },
                          { feature: "Task Prioritization", usage: 90, color: "bg-purple-500" },
                          { feature: "YouTube OCR", usage: 30, color: "bg-red-500" },
                        ].map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between text-xs mb-1">
                              <span>{item.feature}</span>
                              <span>{item.usage}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className={`h-full ${item.color}`} style={{ width: `${item.usage}%` }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">AI Credits</span>
                        <span className="text-sm text-muted-foreground">350/500 remaining</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-primary" style={{ width: "70%" }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground">Credits reset in 12 days</p>
                    </div>

                    <Button variant="outline" className="w-full">
                      Upgrade to Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="settings-first-name">First Name</Label>
                        <Input id="settings-first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="settings-last-name">Last Name</Label>
                        <Input id="settings-last-name" defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="settings-email">Email</Label>
                      <Input id="settings-email" type="email" defaultValue="john.doe@university.edu" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Academic Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="settings-major">Major</Label>
                        <Input id="settings-major" defaultValue="Computer Science" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="settings-minor">Minor (Optional)</Label>
                        <Input id="settings-minor" defaultValue="Mathematics" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="settings-university">University</Label>
                        <Input id="settings-university" defaultValue="State University" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="settings-graduation">Expected Graduation</Label>
                        <Input id="settings-graduation" defaultValue="May 2026" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Profile</h3>
                    <div className="space-y-2">
                      <Label htmlFor="settings-bio">Bio</Label>
                      <Textarea
                        id="settings-bio"
                        placeholder="Tell us about yourself"
                        defaultValue="Computer Science student passionate about AI and web development. Looking to build innovative solutions that make a difference."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="settings-skills">Skills (comma separated)</Label>
                      <Input
                        id="settings-skills"
                        defaultValue="Python, JavaScript, React, Data Structures, Machine Learning"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="settings-interests">Interests (comma separated)</Label>
                      <Input
                        id="settings-interests"
                        defaultValue="Web Development, AI, Data Science, Mobile Apps, Cybersecurity"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                    </div>
                    <div className="ml-2 shrink-0">
                      <Button variant="outline" size="sm">
                        Toggle
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive email updates about your activity</p>
                    </div>
                    <div className="ml-2 shrink-0">
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Study Reminders</Label>
                      <p className="text-sm text-muted-foreground">Get notifications for scheduled study sessions</p>
                    </div>
                    <div className="ml-2 shrink-0">
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">AI Suggestions</Label>
                      <p className="text-sm text-muted-foreground">Receive AI-powered recommendations</p>
                    </div>
                    <div className="ml-2 shrink-0">
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>Manage your data and privacy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Data Export</h3>
                    <p className="text-sm text-muted-foreground">Download all your data in a portable format</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Export Data
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Account Deletion</h3>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data
                    </p>
                    <Button variant="destructive" size="sm" className="w-full">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Change Password</h3>
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Login Sessions</h3>
                    <div className="space-y-3">
                      {[
                        { device: "Windows PC - Chrome", location: "New York, USA", time: "Current session" },
                        { device: "iPhone 13 - Safari", location: "New York, USA", time: "2 hours ago" },
                        { device: "MacBook Pro - Firefox", location: "Boston, USA", time: "Yesterday" },
                      ].map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <p className="text-sm font-medium">{session.device}</p>
                            <p className="text-xs text-muted-foreground">
                              {session.location} • {session.time}
                            </p>
                          </div>
                          {session.time === "Current session" ? (
                            <Badge>Current</Badge>
                          ) : (
                            <Button variant="outline" size="sm">
                              Logout
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline">Logout from all devices</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Security Status</CardTitle>
                  <CardDescription>Your account security overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Security Score</p>
                        <div className="flex items-center">
                          <span className="text-lg font-bold mr-2">Good</span>
                          <span className="text-sm text-muted-foreground">(75/100)</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">Strong password</span>
                      </div>

                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-red-500 mr-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                        <span className="text-sm">Two-factor authentication not enabled</span>
                      </div>

                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">Email verified</span>
                      </div>

                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-500 mr-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">Recent password change</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Recommendations</CardTitle>
                  <CardDescription>Improve your account security</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-md">
                      <h3 className="text-sm font-medium mb-1">Enable Two-Factor Authentication</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Add an extra layer of security to your account.
                      </p>
                      <Button variant="outline" size="sm">
                        Enable Now
                      </Button>
                    </div>

                    <div className="p-3 border rounded-md">
                      <h3 className="text-sm font-medium mb-1">Review Connected Apps</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Check and manage third-party applications with access to your account.
                      </p>
                      <Button variant="outline" size="sm">
                        Review Apps
                      </Button>
                    </div>

                    <div className="p-3 border rounded-md">
                      <h3 className="text-sm font-medium mb-1">Set Up Recovery Email</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Add a backup email to recover your account if needed.
                      </p>
                      <Button variant="outline" size="sm">
                        Add Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="subscription" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>Your subscription details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 border rounded-lg bg-primary/5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Free Plan</h3>
                        <p className="text-sm text-muted-foreground">Basic features for students</p>
                      </div>
                      <Badge>Current Plan</Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Plan Features</h4>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-green-500"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              Basic note summarization
                            </li>
                            <li className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-green-500"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              Limited quiz generation (5/day)
                            </li>
                            <li className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-green-500"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              Task management
                            </li>
                            <li className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-green-500"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              Community access
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-1">Limitations</h4>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-red-500"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                              Limited AI credits (500/month)
                            </li>
                            <li className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-red-500"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                              No advanced analytics
                            </li>
                            <li className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-red-500"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                              Limited PYQ analysis
                            </li>
                            <li className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-red-500"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                              Basic career recommendations
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button className="w-full">Upgrade to Premium</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Usage Summary</CardTitle>
                  <CardDescription>Your current usage statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>AI Credits</span>
                      <span>350/500</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "70%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Resets in 12 days</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quiz Generation</span>
                      <span>3/5 today</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "60%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Resets daily</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Storage</span>
                      <span>250MB/1GB</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium Benefits</CardTitle>
                  <CardDescription>Upgrade to unlock more features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-primary mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Unlimited AI credits for all features</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-primary mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Advanced analytics and insights</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-primary mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Priority support and feature requests</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-primary mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Enhanced career recommendations and internship matching</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-primary mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm">Advanced PYQ analysis with personalized recommendations</span>
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button className="w-full">Upgrade Now</Button>
                    <p className="text-xs text-center text-muted-foreground mt-2">Starting at 200 INR/month</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

