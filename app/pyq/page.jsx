import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUp, BarChart, Search } from "lucide-react"

export default function PYQPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Previous Year Question Analyzer</h1>
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Upload PYQs</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="library">My PYQs</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Previous Year Question Papers</CardTitle>
              <CardDescription>
                Upload question papers to analyze patterns, important topics, and difficulty levels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="E.g., Computer Science, Physics" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="exam-type">Exam Type</Label>
                  <Select>
                    <SelectTrigger id="exam-type">
                      <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="midterm">Midterm</SelectItem>
                      <SelectItem value="final">Final Exam</SelectItem>
                      <SelectItem value="entrance">Entrance Exam</SelectItem>
                      <SelectItem value="competitive">Competitive Exam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" placeholder="E.g., 2023" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution">Institution (Optional)</Label>
                  <Input id="institution" placeholder="E.g., MIT, Stanford" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 text-center mt-4">
                <FileUp className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="mb-2 text-sm text-muted-foreground">
                  Drag and drop your question papers here, or click to browse
                </p>
                <p className="text-xs text-muted-foreground mb-4">Supports PDF, DOCX, and image files (JPG, PNG)</p>
                <Button>Select Files</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Upload and Analyze</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Dashboard</CardTitle>
              <CardDescription>View insights and patterns from your uploaded question papers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Topic Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-muted rounded-md">
                      <BarChart className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Difficulty Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-muted rounded-md">
                      <BarChart className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Question Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-muted rounded-md">
                      <BarChart className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Important Topics</CardTitle>
                  <CardDescription>Topics that frequently appear in previous year questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { topic: "Data Structures", frequency: "85%", years: "2020, 2021, 2022, 2023" },
                      { topic: "Algorithms", frequency: "78%", years: "2019, 2021, 2022, 2023" },
                      { topic: "Database Systems", frequency: "65%", years: "2020, 2022, 2023" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium">{item.topic}</h4>
                          <p className="text-sm text-muted-foreground">Appears in: {item.years}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold">{item.frequency}</span>
                          <p className="text-sm text-muted-foreground">Frequency</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="library" className="mt-6">
          <div className="flex items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search your PYQs..." className="pl-8" />
            </div>
            <Button variant="outline" className="ml-2">
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Computer Science Final {2020 + item}</CardTitle>
                  <CardDescription>Uploaded 5 days ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Contains 50 questions across various topics including Data Structures, Algorithms, and Operating
                    Systems.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Paper
                  </Button>
                  <Button size="sm">View Analysis</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

