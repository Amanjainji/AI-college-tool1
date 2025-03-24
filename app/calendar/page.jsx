import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock, ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Time Management & Scheduling</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add Event</CardTitle>
              <CardDescription>Schedule a new event or study session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-title">Event Title</Label>
                <Input id="event-title" placeholder="E.g., Study Session, Class" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-date">Date</Label>
                <div className="relative">
                  <CalendarIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="event-date" placeholder="Select date" className="pl-8" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Start Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="start-time" placeholder="Start" className="pl-8" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end-time">End Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="end-time" placeholder="End" className="pl-8" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <Select>
                  <SelectTrigger id="event-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="class">Class</SelectItem>
                    <SelectItem value="study">Study Session</SelectItem>
                    <SelectItem value="assignment">Assignment</SelectItem>
                    <SelectItem value="exam">Exam</SelectItem>
                    <SelectItem value="meeting">Meeting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-subject">Subject (Optional)</Label>
                <Select>
                  <SelectTrigger id="event-subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-description">Description (Optional)</Label>
                <Textarea id="event-description" placeholder="Add details about this event" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Calendar</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { title: "Physics Class", time: "Today, 2:00 PM", type: "class" },
                  { title: "Study Group", time: "Today, 4:30 PM", type: "study" },
                  { title: "Math Assignment Due", time: "Tomorrow, 11:59 PM", type: "assignment" },
                  { title: "CS Project Meeting", time: "Wed, 3:00 PM", type: "meeting" },
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 border rounded-md">
                    <div
                      className={`h-10 w-1 rounded-full ${
                        event.type === "class"
                          ? "bg-blue-500"
                          : event.type === "study"
                            ? "bg-green-500"
                            : event.type === "assignment"
                              ? "bg-yellow-500"
                              : "bg-purple-500"
                      }`}
                    ></div>
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Calendar */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>March 2025</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center font-medium text-sm py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Previous Month */}
                {[23, 24, 25, 26, 27, 28].map((day) => (
                  <div key={`prev-${day}`} className="h-24 border rounded-md p-1 bg-muted/30">
                    <div className="text-xs text-muted-foreground">{day}</div>
                  </div>
                ))}

                {/* Current Month */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={`current-${day}`}
                    className={`h-24 border rounded-md p-1 ${day === 24 ? "border-primary bg-primary/5" : ""}`}
                  >
                    <div className={`text-xs ${day === 24 ? "font-bold text-primary" : ""}`}>{day}</div>

                    {/* Events for day 24 (today) */}
                    {day === 24 && (
                      <div className="mt-1 space-y-1">
                        <div className="text-xs p-1 rounded bg-blue-100 text-blue-800 truncate">2:00 PM Physics</div>
                        <div className="text-xs p-1 rounded bg-green-100 text-green-800 truncate">4:30 PM Study</div>
                      </div>
                    )}

                    {/* Events for day 25 */}
                    {day === 25 && (
                      <div className="mt-1 space-y-1">
                        <div className="text-xs p-1 rounded bg-yellow-100 text-yellow-800 truncate">11:59 PM Math</div>
                      </div>
                    )}

                    {/* Events for day 26 */}
                    {day === 26 && (
                      <div className="mt-1 space-y-1">
                        <div className="text-xs p-1 rounded bg-purple-100 text-purple-800 truncate">
                          3:00 PM Meeting
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Next Month */}
                {[1, 2, 3, 4, 5].map((day) => (
                  <div key={`next-${day}`} className="h-24 border rounded-md p-1 bg-muted/30">
                    <div className="text-xs text-muted-foreground">{day}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>March 24, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative pl-6 border-l-2 border-primary space-y-6">
                  {[
                    { time: "9:00 AM - 10:30 AM", title: "Computer Science Lecture", location: "Room 302" },
                    { time: "11:00 AM - 12:30 PM", title: "Study Session: Algorithms", location: "Library" },
                    { time: "2:00 PM - 3:30 PM", title: "Physics Class", location: "Science Building" },
                    { time: "4:30 PM - 6:00 PM", title: "Study Group Meeting", location: "Student Center" },
                  ].map((event, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">{event.time}</div>
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Study Time Analysis</CardTitle>
                <CardDescription>Weekly study hours by subject</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Computer Science</span>
                    <span>8 hours</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "40%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Physics</span>
                    <span>6 hours</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "30%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mathematics</span>
                    <span>4 hours</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: "20%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>English</span>
                    <span>2 hours</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: "10%" }}></div>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-sm font-medium mb-2">Productivity Score</h4>
                  <div className="flex items-center">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "75%" }}></div>
                    </div>
                    <span className="ml-2 font-medium">75%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">You're on track with your study goals this week!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

