import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Clock, ExternalLink, MapPin, Search, Star, User } from "lucide-react"

export default function CareerPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Career & Internship Recommendations</h1>

      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="internships">Internships</TabsTrigger>
          <TabsTrigger value="jobs">Job Openings</TabsTrigger>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Recommendations</CardTitle>
                  <CardDescription>AI-suggested opportunities based on your profile and interests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Top Matches</h3>
                      <Button variant="outline" size="sm">
                        Refresh
                      </Button>
                    </div>

                    {[
                      {
                        title: "Software Engineering Intern",
                        company: "TechCorp",
                        location: "San Francisco, CA (Remote)",
                        match: 95,
                        tags: ["Software Development", "React", "Node.js"],
                        deadline: "Apr 15, 2025",
                      },
                      {
                        title: "Data Science Research Assistant",
                        company: "University Research Lab",
                        location: "Boston, MA (On-site)",
                        match: 92,
                        tags: ["Data Analysis", "Machine Learning", "Python"],
                        deadline: "Apr 10, 2025",
                      },
                      {
                        title: "Product Management Intern",
                        company: "InnovateTech",
                        location: "New York, NY (Hybrid)",
                        match: 88,
                        tags: ["Product Development", "User Research", "Agile"],
                        deadline: "Apr 20, 2025",
                      },
                    ].map((opportunity, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">{opportunity.title}</h4>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Building className="h-3 w-3 mr-1" />
                                <span>{opportunity.company}</span>
                                <span className="mx-1">•</span>
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{opportunity.location}</span>
                              </div>
                            </div>
                            <div className="bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs">
                              {opportunity.match}% Match
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {opportunity.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="font-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 inline-block mr-1" />
                              Deadline: {opportunity.deadline}
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                Save
                              </Button>
                              <Button size="sm">Apply</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Research Opportunities</h3>

                    {[
                      {
                        title: "Undergraduate Research Assistant - AI Ethics",
                        department: "Computer Science Department",
                        professor: "Dr. Sarah Johnson",
                        tags: ["AI", "Ethics", "Research"],
                        deadline: "Apr 30, 2025",
                      },
                      {
                        title: "Research Assistant - Quantum Computing",
                        department: "Physics Department",
                        professor: "Dr. Michael Chen",
                        tags: ["Quantum Computing", "Physics", "Mathematics"],
                        deadline: "May 5, 2025",
                      },
                    ].map((opportunity, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h4 className="font-medium">{opportunity.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Building className="h-3 w-3 mr-1" />
                            <span>{opportunity.department}</span>
                            <span className="mx-1">•</span>
                            <User className="h-3 w-3 mr-1" />
                            <span>{opportunity.professor}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {opportunity.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="font-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 inline-block mr-1" />
                              Deadline: {opportunity.deadline}
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                Details
                              </Button>
                              <Button size="sm">Apply</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Recommendation Settings</CardTitle>
                  <CardDescription>Customize your career recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="internship">Internships</SelectItem>
                        <SelectItem value="part-time">Part-Time</SelectItem>
                        <SelectItem value="full-time">Full-Time</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="remote">Remote Only</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="on-site">On-Site</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select defaultValue="tech">
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Industries</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Skills (Select up to 5)</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "JavaScript", "React", "Data Analysis", "Machine Learning"].map((skill) => (
                        <Badge key={skill} variant="outline" className="cursor-pointer">
                          {skill} ✓
                        </Badge>
                      ))}
                      <Badge variant="outline" className="cursor-pointer bg-muted/50">
                        + Add
                      </Badge>
                    </div>
                  </div>

                  <Button className="w-full">Update Preferences</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Career Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <h4 className="font-medium text-blue-700 mb-1">Trending Skills</h4>
                    <p className="text-sm text-blue-600">
                      Machine learning and cloud computing skills are in high demand in your field.
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <h4 className="font-medium text-green-700 mb-1">Application Tip</h4>
                    <p className="text-sm text-green-600">
                      Highlight your project experience with React and Node.js to stand out to employers.
                    </p>
                  </div>

                  <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
                    <h4 className="font-medium text-purple-700 mb-1">Upcoming Deadlines</h4>
                    <p className="text-sm text-purple-600">
                      5 recommended opportunities have application deadlines within the next 2 weeks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="internships" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Internship Opportunities</CardTitle>
                  <CardDescription>Browse and filter available internships</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative w-[250px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search internships..." className="pl-8" />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card key={item}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">Software Engineering Intern {item}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Building className="h-3 w-3 mr-1" />
                            <span>Company {item}</span>
                            <span className="mx-1">•</span>
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{item % 2 === 0 ? "Remote" : "San Francisco, CA"}</span>
                            <span className="mx-1">•</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{item % 2 === 0 ? "Part-time" : "Full-time"}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Button variant="ghost" size="icon">
                            <Star className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {["JavaScript", "React", "Node.js", "Git"].map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 inline-block mr-1" />
                          Posted {item} day{item !== 1 ? "s" : ""} ago • Apply by Apr {10 + item}, 2025
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm">Apply</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Job Openings</CardTitle>
                  <CardDescription>Entry-level and part-time job opportunities</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative w-[250px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search jobs..." className="pl-8" />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card key={item}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">Junior Developer {item}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Building className="h-3 w-3 mr-1" />
                            <span>Tech Company {item}</span>
                            <span className="mx-1">•</span>
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{item % 2 === 0 ? "Remote" : "New York, NY"}</span>
                            <span className="mx-1">•</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{item % 2 === 0 ? "Part-time" : "Full-time"}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Button variant="ghost" size="icon">
                            <Star className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {["JavaScript", "React", "Node.js", "Git"].map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 inline-block mr-1" />
                          Posted {item} day{item !== 1 ? "s" : ""} ago
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm">Apply</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Career Profile</CardTitle>
                  <CardDescription>Update your profile to get better recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="First Name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="major">Major</Label>
                      <Input id="major" placeholder="E.g., Computer Science" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="graduation-year">Expected Graduation</Label>
                      <Select>
                        <SelectTrigger id="graduation-year">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Textarea
                      id="skills"
                      placeholder="Enter your skills, separated by commas (e.g., JavaScript, Python, Data Analysis)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Career Interests</Label>
                    <Textarea id="interests" placeholder="Describe your career interests and goals" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV</Label>
                    <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-6 text-center">
                      <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Drag and drop your resume here, or click to browse
                        </p>
                        <Button variant="outline" size="sm">
                          Upload Resume
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Profile</Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Profile Completeness</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Completeness</span>
                      <span>75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "75%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Basic Information</span>
                      <span className="text-green-600">Complete</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Education</span>
                      <span className="text-green-600">Complete</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Skills</span>
                      <span className="text-yellow-600">Partial</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Resume</span>
                      <span className="text-red-600">Missing</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Career Interests</span>
                      <span className="text-green-600">Complete</span>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <h4 className="font-medium text-blue-700 mb-1">Profile Tip</h4>
                    <p className="text-sm text-blue-600">
                      Upload your resume to increase your profile completeness and get better job matches.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Application Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        position: "Software Engineering Intern",
                        company: "TechCorp",
                        status: "Applied",
                        date: "Mar 15, 2025",
                      },
                      {
                        position: "Research Assistant",
                        company: "University Lab",
                        status: "Interview",
                        date: "Mar 10, 2025",
                      },
                      { position: "Junior Developer", company: "StartupX", status: "Rejected", date: "Feb 28, 2025" },
                    ].map((application, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium text-sm">{application.position}</h4>
                          <p className="text-xs text-muted-foreground">
                            {application.company} • {application.date}
                          </p>
                        </div>
                        <Badge
                          variant={
                            application.status === "Applied"
                              ? "outline"
                              : application.status === "Interview"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {application.status}
                        </Badge>
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

