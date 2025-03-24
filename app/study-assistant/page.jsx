import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, FileText } from "lucide-react"

export default function StudyAssistantPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Study Assistant</h1>

      <Tabs defaultValue="study-plan" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="study-plan">Study Plan</TabsTrigger>
          <TabsTrigger value="summaries">Summaries</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
        </TabsList>

        <TabsContent value="study-plan" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Your Study Plan</CardTitle>
                  <CardDescription>AI-generated study schedule based on your courses and deadlines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Today's Plan</h3>
                      <Button className="flex font-semibold" variant="outline" >
                        <Calendar className="h-4 w-4 mr-2" />
                        View Calendar
                      </Button>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          time: "9:00 AM - 10:30 AM",
                          subject: "Calculus II",
                          topic: "Integration Techniques",
                          priority: "high",
                        },
                        {
                          time: "11:00 AM - 12:30 PM",
                          subject: "Physics 101",
                          topic: "Mechanics and Motion",
                          priority: "medium",
                        },
                        {
                          time: "2:00 PM - 3:30 PM",
                          subject: "Computer Science",
                          topic: "Data Structures",
                          priority: "high",
                        },
                        {
                          time: "4:00 PM - 5:00 PM",
                          subject: "English Literature",
                          topic: "Essay Preparation",
                          priority: "medium",
                        },
                      ].map((session, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 border rounded-md">
                          <div className="flex-none w-[140px] text-sm">
                            <Clock className="h-4 w-4 inline-block mr-1" />
                            {session.time}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{session.subject}</h4>
                            <p className="text-sm text-muted-foreground">{session.topic}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Start
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Weekly Overview</h3>
                    <div className="grid grid-cols-7 gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div key={day} className="text-center">
                          <div className="text-sm font-medium mb-1">{day}</div>
                          <div
                            className={`h-20 border rounded-md flex items-center justify-center ${day === "Wed" ? "bg-primary/10 border-primary" : ""}`}
                          >
                            <div className="text-xs text-center p-1">
                              {day === "Mon" && (
                                <>
                                  <div className="font-medium">3 Sessions</div>
                                  <div className="text-muted-foreground">5 hours</div>
                                </>
                              )}
                              {day === "Tue" && (
                                <>
                                  <div className="font-medium">2 Sessions</div>
                                  <div className="text-muted-foreground">3 hours</div>
                                </>
                              )}
                              {day === "Wed" && (
                                <>
                                  <div className="font-medium">Today</div>
                                  <div className="text-muted-foreground">4 Sessions</div>
                                </>
                              )}
                              {day === "Thu" && (
                                <>
                                  <div className="font-medium">4 Sessions</div>
                                  <div className="text-muted-foreground">6 hours</div>
                                </>
                              )}
                              {day === "Fri" && (
                                <>
                                  <div className="font-medium">2 Sessions</div>
                                  <div className="text-muted-foreground">3 hours</div>
                                </>
                              )}
                              {day === "Sat" && (
                                <>
                                  <div className="font-medium">1 Session</div>
                                  <div className="text-muted-foreground">2 hours</div>
                                </>
                              )}
                              {day === "Sun" && (
                                <>
                                  <div className="font-medium">Rest Day</div>
                                  <div className="text-muted-foreground">0 hours</div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Create Study Plan</CardTitle>
                  <CardDescription>Generate a personalized study plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="plan-subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="plan-subject">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan-goal">Study Goal</Label>
                    <Select>
                      <SelectTrigger id="plan-goal">
                        <SelectValue placeholder="Select goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exam">Prepare for Exam</SelectItem>
                        <SelectItem value="assignment">Complete Assignment</SelectItem>
                        <SelectItem value="concept">Master a Concept</SelectItem>
                        <SelectItem value="review">General Review</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan-duration">Duration</Label>
                    <Select defaultValue="1-week">
                      <SelectTrigger id="plan-duration">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-day">1 Day</SelectItem>
                        <SelectItem value="3-day">3 Days</SelectItem>
                        <SelectItem value="1-week">1 Week</SelectItem>
                        <SelectItem value="2-week">2 Weeks</SelectItem>
                        <SelectItem value="1-month">1 Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan-notes">Additional Notes (Optional)</Label>
                    <Textarea id="plan-notes" placeholder="Any specific topics or requirements" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Generate Study Plan</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Study Stats</CardTitle>
                  <CardDescription>Your study progress and analytics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Weekly Study Hours</h4>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "65%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0h</span>
                      <span>13h / 20h</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Subject Distribution</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Mathematics</span>
                          <span>35%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Physics</span>
                          <span>25%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Computer Science</span>
                          <span>30%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>English</span>
                          <span>10%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="summaries" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Summaries</CardTitle>
                  <CardDescription>AI-generated summaries of your notes and study materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Physics 101: Mechanics</h3>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md space-y-3">
                      <h4 className="font-medium">Key Concepts</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Newton's Laws of Motion: First law (inertia), Second law (F=ma), Third law (action-reaction)
                        </li>
                        <li>Conservation of Energy: Energy cannot be created or destroyed, only transformed</li>
                        <li>
                          Work and Energy: Work is force applied over distance, related to kinetic and potential energy
                        </li>
                        <li>Momentum: Product of mass and velocity, conserved in closed systems</li>
                      </ul>

                      <h4 className="font-medium">Important Formulas</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>F = ma (Force equals mass times acceleration)</li>
                        <li>W = Fd (Work equals force times distance)</li>
                        <li>KE = ½mv² (Kinetic energy)</li>
                        <li>PE = mgh (Gravitational potential energy)</li>
                        <li>p = mv (Momentum equals mass times velocity)</li>
                      </ul>

                      <h4 className="font-medium">Applications</h4>
                      <p className="text-sm">
                        These principles apply to everyday phenomena like vehicle motion, sports physics, and structural
                        engineering. Understanding these concepts helps explain how objects move and interact in the
                        physical world.
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <h3 className="text-lg font-medium">Computer Science: Data Structures</h3>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md space-y-3">
                      <h4 className="font-medium">Key Concepts</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Arrays: Fixed-size collection of elements with same data type</li>
                        <li>Linked Lists: Linear collection of elements with dynamic size</li>
                        <li>Stacks: LIFO (Last In, First Out) data structure</li>
                        <li>Queues: FIFO (First In, First Out) data structure</li>
                        <li>Trees: Hierarchical data structure with parent-child relationships</li>
                        <li>Graphs: Collection of nodes connected by edges</li>
                      </ul>

                      <h4 className="font-medium">Time Complexity</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Array access: O(1), Search: O(n)</li>
                        <li>Linked List access: O(n), Insertion: O(1)</li>
                        <li>Binary Search Tree search: O(log n) average case</li>
                        <li>Hash Table search: O(1) average case</li>
                      </ul>

                      <h4 className="font-medium">Applications</h4>
                      <p className="text-sm">
                        Data structures are fundamental to efficient algorithm design and implementation. They are used
                        in databases, file systems, network routing, and virtually all software applications to organize
                        and manipulate data efficiently.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Generate Summary</CardTitle>
                  <CardDescription>Create a concise summary from your notes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="summary-subject">Subject</Label>
                    <Input id="summary-subject" placeholder="E.g., Biology, History" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary-topic">Topic</Label>
                    <Input id="summary-topic" placeholder="E.g., Cell Biology, World War II" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary-content">Content</Label>
                    <Textarea
                      id="summary-content"
                      placeholder="Paste your notes or content to summarize"
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary-length">Summary Length</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="summary-length">
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (1-2 paragraphs)</SelectItem>
                        <SelectItem value="medium">Medium (3-4 paragraphs)</SelectItem>
                        <SelectItem value="long">Long (5+ paragraphs)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Generate Summary</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Summaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: "Calculus: Integration", date: "2 days ago" },
                      { title: "History: Renaissance", date: "5 days ago" },
                      { title: "Biology: Genetics", date: "1 week ago" },
                    ].map((summary, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                        <div>
                          <h4 className="font-medium">{summary.title}</h4>
                          <p className="text-xs text-muted-foreground">{summary.date}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="flashcards" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Study Flashcards</CardTitle>
                      <CardDescription>Review your AI-generated flashcards</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/2] border rounded-lg flex items-center justify-center p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                    <div>
                      <h3 className="text-xl font-medium mb-2">What is Newton's Second Law of Motion?</h3>
                      <p className="text-sm text-muted-foreground">Click to reveal answer</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Mark as Known
                      </Button>
                      <Button variant="outline" size="sm">
                        Mark as Difficult
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">Card 3 of 20</div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Flashcard Sets</CardTitle>
                    <CardDescription>Your saved flashcard collections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { title: "Physics Fundamentals", count: 30, progress: 40 },
                        { title: "Computer Science Terms", count: 45, progress: 60 },
                        { title: "Calculus Formulas", count: 25, progress: 20 },
                        { title: "Biology Concepts", count: 35, progress: 10 },
                      ].map((set, index) => (
                        <div key={index} className="p-3 border rounded-md">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{set.title}</h4>
                            <span className="text-xs text-muted-foreground">{set.count} cards</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
                            <div className="h-full bg-primary" style={{ width: `${set.progress}%` }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>{set.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Study Statistics</CardTitle>
                    <CardDescription>Your flashcard learning progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Cards Studied Today</h4>
                      <div className="flex items-end space-x-1">
                        <span className="text-3xl font-bold">24</span>
                        <span className="text-sm text-muted-foreground mb-1">cards</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-1">Weekly Progress</h4>
                      <div className="flex items-center space-x-1 h-16">
                        {[30, 45, 20, 60, 35, 50, 24].map((value, index) => (
                          <div key={index} className="flex-1 h-full flex items-end">
                            <div className="w-full bg-primary/80 rounded-t-sm" style={{ height: `${value}%` }}></div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-1">Mastery Level</h4>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Create Flashcards</CardTitle>
                  <CardDescription>Generate flashcards from your notes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="flashcard-title">Flashcard Set Title</Label>
                    <Input id="flashcard-title" placeholder="E.g., Biology Terms" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="flashcard-content">Content</Label>
                    <Textarea
                      id="flashcard-content"
                      placeholder="Paste your notes or content to generate flashcards from"
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="flashcard-count">Number of Cards</Label>
                      <Select defaultValue="20">
                        <SelectTrigger id="flashcard-count">
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 cards</SelectItem>
                          <SelectItem value="20">20 cards</SelectItem>
                          <SelectItem value="30">30 cards</SelectItem>
                          <SelectItem value="50">50 cards</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="flashcard-type">Card Type</Label>
                      <Select defaultValue="term-definition">
                        <SelectTrigger id="flashcard-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="term-definition">Term-Definition</SelectItem>
                          <SelectItem value="question-answer">Question-Answer</SelectItem>
                          <SelectItem value="concept-example">Concept-Example</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Generate Flashcards</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Study Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <h4 className="font-medium text-blue-700 mb-1">Spaced Repetition</h4>
                    <p className="text-sm text-blue-600">
                      Review cards at increasing intervals to improve long-term retention.
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <h4 className="font-medium text-green-700 mb-1">Active Recall</h4>
                    <p className="text-sm text-green-600">
                      Test yourself regularly instead of passively reviewing the material.
                    </p>
                  </div>

                  <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
                    <h4 className="font-medium text-purple-700 mb-1">Interleaving</h4>
                    <p className="text-sm text-purple-600">
                      Mix different topics in your study sessions for better learning.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="quizzes" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Physics Quiz</CardTitle>
                      <CardDescription>Test your knowledge on mechanics and motion</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">Question 3 of 10</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-md">
                    <h3 className="text-lg font-medium mb-4">
                      A 2 kg object is moving with a velocity of 5 m/s. What is its kinetic energy?
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="option-a" name="question" className="h-4 w-4" />
                        <Label htmlFor="option-a">A) 5 J</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="option-b" name="question" className="h-4 w-4" />
                        <Label htmlFor="option-b">B) 10 J</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="option-c" name="question" className="h-4 w-4" />
                        <Label htmlFor="option-c">C) 25 J</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="option-d" name="question" className="h-4 w-4" />
                        <Label htmlFor="option-d">D) 50 J</Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="outline">Previous</Button>
                    <Button>Next</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Quizzes</CardTitle>
                    <CardDescription>Your quiz history and results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { title: "Physics: Mechanics", score: "8/10", date: "Yesterday" },
                        { title: "Computer Science: Algorithms", score: "7/10", date: "3 days ago" },
                        { title: "Mathematics: Calculus", score: "9/10", date: "1 week ago" },
                      ].map((quiz, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <h4 className="font-medium">{quiz.title}</h4>
                            <p className="text-xs text-muted-foreground">{quiz.date}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold">{quiz.score}</span>
                            <p className="text-xs text-muted-foreground">Score</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Analysis</CardTitle>
                    <CardDescription>Your quiz performance by subject</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Physics</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Computer Science</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: "78%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Mathematics</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "92%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Biology</span>
                        <span>70%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Generate Quiz</CardTitle>
                  <CardDescription>Create a quiz to test your knowledge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quiz-subject">Subject</Label>
                    <Input id="quiz-subject" placeholder="E.g., Physics, History" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quiz-topic">Topic</Label>
                    <Input id="quiz-topic" placeholder="E.g., Mechanics, World War II" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quiz-content">Content (Optional)</Label>
                    <Textarea
                      id="quiz-content"
                      placeholder="Paste your notes to generate questions from"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quiz-questions">Number of Questions</Label>
                      <Select defaultValue="10">
                        <SelectTrigger id="quiz-questions">
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 questions</SelectItem>
                          <SelectItem value="10">10 questions</SelectItem>
                          <SelectItem value="15">15 questions</SelectItem>
                          <SelectItem value="20">20 questions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quiz-difficulty">Difficulty</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger id="quiz-difficulty">
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Generate Quiz</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Quizzes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: "Physics: Forces and Motion", questions: 10, difficulty: "Medium" },
                      { title: "Computer Science: Data Structures", questions: 15, difficulty: "Hard" },
                      { title: "Mathematics: Calculus Basics", questions: 10, difficulty: "Medium" },
                    ].map((quiz, index) => (
                      <div key={index} className="p-3 border rounded-md">
                        <h4 className="font-medium">{quiz.title}</h4>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                          <span>{quiz.questions} questions</span>
                          <span>{quiz.difficulty}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Start Quiz
                        </Button>
                      </div>
                    ))}
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

