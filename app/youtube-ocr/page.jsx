import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Youtube, FileText, Clock, Search } from "lucide-react"

export default function YoutubeOCRPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">YouTube OCR</h1>

      <Tabs defaultValue="extract" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="extract">Extract Text</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="library">My Library</TabsTrigger>
        </TabsList>

        <TabsContent value="extract" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Extract Text from YouTube Video</CardTitle>
                  <CardDescription>Extract and summarize text content from YouTube videos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="youtube-url">YouTube Video URL</Label>
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <Youtube className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="youtube-url" placeholder="https://www.youtube.com/watch?v=..." className="pl-8" />
                      </div>
                      <Button>Extract</Button>
                    </div>
                  </div>

                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <Youtube className="h-16 w-16 text-muted-foreground" />
                  </div>

                  <div className="p-4 border rounded-md">
                    <h3 className="text-lg font-medium mb-2">Video Information</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex">
                        <span className="font-medium w-24">Title:</span>
                        <span className="text-muted-foreground">Introduction to Machine Learning</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Channel:</span>
                        <span className="text-muted-foreground">Tech Education</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Duration:</span>
                        <span className="text-muted-foreground">15:42</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24">Published:</span>
                        <span className="text-muted-foreground">March 15, 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Extracted Content</CardTitle>
                  <CardDescription>Text extracted from the video using OCR technology</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Tabs defaultValue="text">
                    <TabsList>
                      <TabsTrigger value="text">Full Text</TabsTrigger>
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="notes">Smart Notes</TabsTrigger>
                    </TabsList>

                    <TabsContent value="text" className="mt-4">
                      <Textarea
                        className="min-h-[300px]"
                        readOnly
                        value="Welcome to this introduction to machine learning. Today we'll cover the basics of machine learning, including supervised and unsupervised learning.

Machine learning is a subset of artificial intelligence that focuses on developing systems that learn from data. The key difference between traditional programming and machine learning is that in traditional programming, we explicitly program rules, while in machine learning, the system learns patterns from data.

There are several types of machine learning:
1. Supervised Learning: The algorithm learns from labeled training data
2. Unsupervised Learning: The algorithm learns patterns from unlabeled data
3. Reinforcement Learning: The algorithm learns by interacting with an environment

Some common applications of machine learning include:
- Image and speech recognition
- Natural language processing
- Recommendation systems
- Fraud detection
- Autonomous vehicles"
                      />
                      <div className="flex justify-end mt-2">
                        <Button variant="outline" size="sm">
                          Copy Text
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="summary" className="mt-4">
                      <div className="p-4 border rounded-md space-y-3">
                        <h3 className="font-medium">Key Points</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Machine learning is a subset of AI that develops systems that learn from data</li>
                          <li>
                            Unlike traditional programming, ML systems learn patterns rather than follow explicit rules
                          </li>
                          <li>
                            Main types: supervised learning (labeled data), unsupervised learning (unlabeled data), and
                            reinforcement learning (environment interaction)
                          </li>
                          <li>
                            Applications include image/speech recognition, NLP, recommendation systems, fraud detection,
                            and autonomous vehicles
                          </li>
                        </ul>
                      </div>
                      <div className="flex justify-end mt-2">
                        <Button variant="outline" size="sm">
                          Copy Summary
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="notes" className="mt-4">
                      <div className="p-4 border rounded-md space-y-4">
                        <div>
                          <h3 className="font-medium">Definition</h3>
                          <p className="text-sm mt-1">
                            Machine learning: A subset of AI where systems learn patterns from data rather than
                            following explicit programming rules.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-medium">Types of Machine Learning</h3>
                          <div className="mt-1 space-y-2">
                            <div className="text-sm">
                              <span className="font-medium">Supervised Learning:</span> Learning from labeled training
                              data
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">Unsupervised Learning:</span> Learning patterns from
                              unlabeled data
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">Reinforcement Learning:</span> Learning by interacting with
                              an environment
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium">Applications</h3>
                          <ul className="list-disc pl-5 mt-1 text-sm space-y-1">
                            <li>Image and speech recognition</li>
                            <li>Natural language processing</li>
                            <li>Recommendation systems</li>
                            <li>Fraud detection</li>
                            <li>Autonomous vehicles</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-end mt-2">
                        <Button variant="outline" size="sm">
                          Copy Notes
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save to Library</Button>
                  <Button>Generate Flashcards</Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Options</CardTitle>
                  <CardDescription>Customize the extraction process</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="extraction-mode">Extraction Mode</Label>
                    <select
                      id="extraction-mode"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="full">Full Video</option>
                      <option value="timestamps">Specific Timestamps</option>
                      <option value="slides">Slides Only</option>
                      <option value="captions">Captions/Subtitles</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                      <option value="ja">Japanese</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary-length">Summary Length</Label>
                    <select
                      id="summary-length"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="short">Short (1-2 paragraphs)</option>
                      <option value="medium">Medium (3-4 paragraphs)</option>
                      <option value="long">Long (5+ paragraphs)</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="include-timestamps"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="include-timestamps">Include Timestamps</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="extract-images"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="extract-images">Extract Key Images</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Extractions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Data Science Fundamentals",
                        channel: "Tech Academy",
                        duration: "22:15",
                        date: "2 days ago",
                      },
                      {
                        title: "Neural Networks Explained",
                        channel: "AI Insights",
                        duration: "18:42",
                        date: "1 week ago",
                      },
                      {
                        title: "Python for Beginners",
                        channel: "Code Masters",
                        duration: "45:30",
                        date: "2 weeks ago",
                      },
                    ].map((video, index) => (
                      <div key={index} className="flex items-start space-x-3 p-2 border rounded-md">
                        <div className="h-12 w-16 bg-muted rounded flex items-center justify-center">
                          <Youtube className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{video.title}</h4>
                          <p className="text-xs text-muted-foreground">{video.channel}</p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{video.duration}</span>
                            <span className="mx-1">•</span>
                            <span>{video.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Extraction History</CardTitle>
                <div className="relative w-[250px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search history..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-start space-x-4 p-4 border rounded-md">
                    <div className="h-20 w-32 bg-muted rounded flex items-center justify-center">
                      <Youtube className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Video Title {item}</h3>
                      <p className="text-sm text-muted-foreground">Channel Name {item}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{10 + item}:42</span>
                        <span className="mx-1">•</span>
                        <span>
                          {item} day{item !== 1 ? "s" : ""} ago
                        </span>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <Button variant="outline" size="sm">
                          View Text
                        </Button>
                        <Button variant="outline" size="sm">
                          View Summary
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="library" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Saved Extractions</CardTitle>
                <div className="flex space-x-2">
                  <div className="relative w-[250px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search library..." className="pl-8" />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <Youtube className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium truncate">Saved Video Title {item}</h3>
                      <p className="text-sm text-muted-foreground">Channel {item}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                        <span>Duration: {10 + item}:42</span>
                        <span>Saved on Mar {item + 10}, 2025</span>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          <FileText className="h-4 w-4 mr-2" />
                          Open
                        </Button>
                        <Button size="sm" className="flex-1">
                          Study
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

