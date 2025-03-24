import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, Search } from "lucide-react"

export default function NotesPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Note Summarizer</h1>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload Notes</TabsTrigger>
          <TabsTrigger value="library">My Library</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Notes</CardTitle>
              <CardDescription>
                Upload your lecture notes, textbooks, or any study material to get AI-powered summaries.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 text-center">
                <FileUp className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="mb-2 text-sm text-muted-foreground">Drag and drop your files here, or click to browse</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Supports PDF, DOCX, TXT, and image files (JPG, PNG)
                </p>
                <Button>Select Files</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="library" className="mt-6">
          <div className="flex items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search your notes..." className="pl-8" />
            </div>
            <Button variant="outline" className="ml-2">
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card key={item}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Biology Notes - Chapter {item}</CardTitle>
                  <CardDescription>Uploaded 2 days ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    This chapter covers the fundamental concepts of cell biology, including cell structure, function,
                    and division processes...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Original
                  </Button>
                  <Button size="sm">View Summary</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

