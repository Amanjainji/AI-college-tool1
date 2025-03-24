import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Youtube,
  Brain,
  Briefcase,
  CheckSquare,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      title: "Note Summarizer",
      description: "Upload your notes and get AI-powered summaries instantly",
      icon: <FileText className="h-6 w-6" />,
      href: "/notes",
    },
    {
      title: "Quiz Generator",
      description: "Create quizzes from your study material to test your knowledge",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/quiz",
    },
    {
      title: "PYQ Analyzer",
      description: "Analyze previous year questions to identify important topics",
      icon: <FileText className="h-6 w-6" />,
      href: "/pyq",
    },
    {
      title: "Community",
      description: "Connect with peers in Discord-like channels for collaboration",
      icon: <MessageSquare className="h-6 w-6" />,
      href: "/community",
    },
    {
      title: "Smart Task Manager",
      description: "AI-powered to-do list with automatic prioritization",
      icon: <CheckSquare className="h-6 w-6" />,
      href: "/tasks",
    },
    {
      title: "AI Study Assistant",
      description: "Get personalized study plans and flashcards",
      icon: <Brain className="h-6 w-6" />,
      href: "/study-assistant",
    },
    {
      title: "YouTube OCR",
      description: "Extract and summarize text from YouTube videos",
      icon: <Youtube className="h-6 w-6" />,
      href: "/youtube-ocr",
    },
    {
      title: "Time Management",
      description: "Smart calendar integration for efficient scheduling",
      icon: <Calendar className="h-6 w-6" />,
      href: "/calendar",
    },
    {
      title: "Career Recommendations",
      description: "Get AI-suggested internships and job opportunities",
      icon: <Briefcase className="h-6 w-6" />,
      href: "/career",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
        <h1 className="text-4xl font-bold tracking-tight">AI College Productivity Tool</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Your all-in-one AI-powered assistant for college success. Manage tasks, study smarter, and boost your
          productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {features.map((feature, index) => (
          <Link href={feature.href} key={index}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-primary/10 rounded-md">{feature.icon}</div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

