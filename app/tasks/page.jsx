import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Plus, AlertCircle } from "lucide-react"

export default function TasksPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Smart Task Manager</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="all">All Tasks</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Today's Tasks</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">High Priority</CardTitle>
                    <CardDescription>Tasks that need immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        {
                          id: 1,
                          title: "Complete Physics Assignment",
                          course: "Physics 101",
                          deadline: "Today, 11:59 PM",
                          priority: "high",
                        },
                        {
                          id: 2,
                          title: "Study for Calculus Quiz",
                          course: "Calculus II",
                          deadline: "Today, 3:00 PM",
                          priority: "high",
                        },
                      ].map((task) => (
                        <div key={task.id} className="flex items-center space-x-2 p-3 border rounded-md">
                          <Checkbox id={`task-${task.id}`} />
                          <div className="flex-1">
                            <Label htmlFor={`task-${task.id}`} className="font-medium cursor-pointer">
                              {task.title}
                            </Label>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>{task.course}</span>
                              <span className="mx-2">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{task.deadline}</span>
                            </div>
                          </div>
                          <Badge variant={task.priority === "high" ? "destructive" : "outline"}>
                            {task.priority === "high" ? "High" : "Medium"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Medium Priority</CardTitle>
                    <CardDescription>Tasks to complete today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        {
                          id: 3,
                          title: "Review lecture notes",
                          course: "Computer Science",
                          deadline: "Today",
                          priority: "medium",
                        },
                        {
                          id: 4,
                          title: "Start research for term paper",
                          course: "History 202",
                          deadline: "Today",
                          priority: "medium",
                        },
                      ].map((task) => (
                        <div key={task.id} className="flex items-center space-x-2 p-3 border rounded-md">
                          <Checkbox id={`task-${task.id}`} />
                          <div className="flex-1">
                            <Label htmlFor={`task-${task.id}`} className="font-medium cursor-pointer">
                              {task.title}
                            </Label>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>{task.course}</span>
                              <span className="mx-2">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{task.deadline}</span>
                            </div>
                          </div>
                          <Badge variant="outline">Medium</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">This Week</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        {
                          id: 5,
                          title: "Complete Programming Project",
                          course: "CS 301",
                          deadline: "Tomorrow, 11:59 PM",
                          priority: "high",
                        },
                        {
                          id: 6,
                          title: "Prepare presentation slides",
                          course: "Business 101",
                          deadline: "Wed, 10:00 AM",
                          priority: "medium",
                        },
                        {
                          id: 7,
                          title: "Submit lab report",
                          course: "Chemistry Lab",
                          deadline: "Fri, 5:00 PM",
                          priority: "medium",
                        },
                      ].map((task) => (
                        <div key={task.id} className="flex items-center space-x-2 p-3 border rounded-md">
                          <Checkbox id={`task-${task.id}`} />
                          <div className="flex-1">
                            <Label htmlFor={`task-${task.id}`} className="font-medium cursor-pointer">
                              {task.title}
                            </Label>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>{task.course}</span>
                              <span className="mx-2">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{task.deadline}</span>
                            </div>
                          </div>
                          <Badge variant={task.priority === "high" ? "destructive" : "outline"}>
                            {task.priority === "high" ? "High" : "Medium"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Next Week</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        {
                          id: 8,
                          title: "Midterm Exam",
                          course: "Physics 101",
                          deadline: "Mon, 2:00 PM",
                          priority: "high",
                        },
                        {
                          id: 9,
                          title: "Essay Submission",
                          course: "English Literature",
                          deadline: "Tue, 11:59 PM",
                          priority: "medium",
                        },
                      ].map((task) => (
                        <div key={task.id} className="flex items-center space-x-2 p-3 border rounded-md">
                          <Checkbox id={`task-${task.id}`} />
                          <div className="flex-1">
                            <Label htmlFor={`task-${task.id}`} className="font-medium cursor-pointer">
                              {task.title}
                            </Label>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>{task.course}</span>
                              <span className="mx-2">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{task.deadline}</span>
                            </div>
                          </div>
                          <Badge variant={task.priority === "high" ? "destructive" : "outline"}>
                            {task.priority === "high" ? "High" : "Medium"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">All Tasks</h2>
                  <div className="flex space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Filter by course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Courses</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Task
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="p-4 border-b">
                      <Input placeholder="Search tasks..." />
                    </div>
                    <div className="divide-y">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                        <div key={id} className="flex items-center space-x-2 p-4">
                          <Checkbox id={`all-task-${id}`} />
                          <div className="flex-1">
                            <Label htmlFor={`all-task-${id}`} className="font-medium cursor-pointer">
                              Task {id}
                            </Label>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>Course {id}</span>
                              <span className="mx-2">•</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>Deadline {id}</span>
                            </div>
                          </div>
                          <Badge variant={id % 3 === 0 ? "destructive" : "outline"}>
                            {id % 3 === 0 ? "High" : "Medium"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Completed Tasks</h2>
                  <Button variant="outline">Clear All</Button>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {[1, 2, 3, 4, 5].map((id) => (
                        <div key={id} className="flex items-center space-x-2 p-4">
                          <Checkbox id={`completed-task-${id}`} checked />
                          <div className="flex-1">
                            <Label
                              htmlFor={`completed-task-${id}`}
                              className="font-medium cursor-pointer line-through text-muted-foreground"
                            >
                              Completed Task {id}
                            </Label>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>Course {id}</span>
                              <span className="mx-2">•</span>
                              <span>Completed on Mar {id + 10}, 2025</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
              <CardDescription>Create a new task with AI-powered prioritization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="task-title">Task Title</Label>
                <Input id="task-title" placeholder="Enter task title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="task-course">Course</Label>
                <Select>
                  <SelectTrigger id="task-course">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs101">CS 101</SelectItem>
                    <SelectItem value="math201">Math 201</SelectItem>
                    <SelectItem value="phys101">Physics 101</SelectItem>
                    <SelectItem value="eng102">English 102</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="task-deadline">Deadline</Label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="task-deadline" placeholder="Select date" className="pl-8" />
                  </div>
                  <div className="relative w-[120px]">
                    <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Time" className="pl-8" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="task-priority">Priority</Label>
                <Select defaultValue="auto">
                  <SelectTrigger id="task-priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto (AI Suggested)</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="task-description">Description (Optional)</Label>
                <Textarea id="task-description" placeholder="Add details about this task" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add Task</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>Smart recommendations based on your tasks and schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-700">Upcoming Deadline</h4>
                  <p className="text-sm text-yellow-600">
                    Your Physics assignment is due in 6 hours. Consider prioritizing this task.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-md flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-700">Study Recommendation</h4>
                  <p className="text-sm text-blue-600">
                    Based on your upcoming quiz, we recommend studying Calculus for at least 2 hours today.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-md flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-700">Productivity Tip</h4>
                  <p className="text-sm text-green-600">You've completed 5 tasks this week. Keep up the good work!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

