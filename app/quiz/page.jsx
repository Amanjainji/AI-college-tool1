import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Plus, Search } from "lucide-react"

export default function QuizPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Quiz Generator</h1>

      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create Quiz</TabsTrigger>
          <TabsTrigger value="library">My Quizzes</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Quiz</CardTitle>
              <CardDescription>
                Generate quiz questions from your notes or enter a topic to create questions automatically.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quiz-title">Quiz Title</Label>
                <Input id="quiz-title" placeholder="Enter a title for your quiz" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quiz-topic">Topic or Subject</Label>
                <Input id="quiz-topic" placeholder="E.g., Biology, Computer Science, History" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quiz-content">Content (Optional)</Label>
                <Textarea
                  id="quiz-content"
                  placeholder="Paste your notes or study material here to generate questions from it"
                  className="min-h-[150px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="question-type">Question Type</Label>
                  <Select defaultValue="multiple-choice">
                    <SelectTrigger id="question-type">
                      <SelectValue placeholder="Select question type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                      <SelectItem value="true-false">True/False</SelectItem>
                      <SelectItem value="short-answer">Short Answer</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="question-count">Number of Questions</Label>
                  <Select defaultValue="10">
                    <SelectTrigger id="question-count">
                      <SelectValue placeholder="Select number of questions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Questions</SelectItem>
                      <SelectItem value="10">10 Questions</SelectItem>
                      <SelectItem value="15">15 Questions</SelectItem>
                      <SelectItem value="20">20 Questions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Generate Quiz</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="library" className="mt-6">
          <div className="flex items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search your quizzes..." className="pl-8" />
            </div>
            <Button className="ml-2">
              <Plus className="h-4 w-4 mr-2" />
              New Quiz
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Biology Quiz {item}</CardTitle>
                  <CardDescription>Created 3 days ago • 10 questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Topics: Cell Biology, Genetics, Evolution</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button size="sm">Take Quiz</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="practice" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Practice Mode</CardTitle>
              <CardDescription>
                Practice with AI-generated questions based on your study materials or choose from recommended topics.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Quick Practice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Start a quick practice session with random questions from your quizzes.
                    </p>
                    <Button className="w-full">Start Practice</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Topic Practice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Practice questions on a specific topic or subject.
                    </p>
                    <Button className="w-full">Choose Topic</Button>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Recommended Topics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {["Biology", "Chemistry", "Physics", "Mathematics", "Computer Science", "History"].map((topic) => (
                    <Button key={topic} variant="outline" className="justify-start">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {topic}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

