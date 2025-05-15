import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle,
  Compass,
  FileText,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 text-primary ml-2">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full ml-1">
                <path
                  d="M12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5Z"
                  fill="currentColor"
                  opacity="0.7"
                />
                <path
                  d="M12 7.5C9.23858 7.5 7 9.73858 7 12.5C7 15.2614 9.23858 17.5 12 17.5C14.7614 17.5 17 15.2614 17 12.5C17 9.73858 14.7614 7.5 12 7.5Z"
                  fill="white"
                />
                <path
                  d="M8.5 11.5C8.5 11.5 9 10.5 12 10.5C15 10.5 15.5 11.5 15.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 14.5L11 13.5M14 14.5L13 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">Tortoise</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Benefits
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Turn your biggest dreams into daily, actionable steps
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Tortoise is an AI-powered execution engine that eliminates distractions, reduces strategic
                  uncertainty, and compounds your leverage over time.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="gap-2">
                    Start for free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn more
                  </Button>
                </div>
              </div>
              <Card className="relative aspect-video overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Tortoise dashboard preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Your AI-powered execution engine</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Tortoise helps you break down your biggest goals into manageable steps and keeps you focused on what
                  matters.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Target className="h-8 w-8 text-primary" />
                    <CardTitle>Goal Tracking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tracks your long-term and short-term goals with dynamic prioritization.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Brain className="h-8 w-8 text-primary" />
                    <CardTitle>Adaptive Learning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Reflects on your performance and adjusts strategy over time via feedback loops.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <CardTitle>Daily Action Plans</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generates daily action plans that focus only on what moves the needle today.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <CardTitle>Insights Engine</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Surfaces opportunities, insights, and research automatically through RAG or web scraping.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <CardTitle>Content Creation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Helps you build BD materials, outreach cadences, and memos faster than any analyst could.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <CardTitle>Accountability</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Holds you accountable by summarizing what you did/didn&apos;t do and what you learned.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How Tortoise works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  A simple yet powerful approach to achieving your goals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mx-auto">
                    1
                  </div>
                  <CardTitle>Define your vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Start by setting your biggest life goals and dreams. Tortoise helps you articulate what success looks
                    like.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mx-auto">
                    2
                  </div>
                  <CardTitle>AI breaks it down</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Our AI engine decomposes your goals into strategic milestones and tactical daily actions you can take.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mx-auto">
                    3
                  </div>
                  <CardTitle>Execute and adapt</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Focus on daily execution while Tortoise learns from your progress, adapts your plan, and keeps you
                    accountable.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Card className="relative aspect-square overflow-hidden sm:aspect-video lg:aspect-square">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Tortoise benefits visualization"
                    fill
                    className="object-cover"
                  />
                </CardContent>
              </Card>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What&apos;s left for you is to execute</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Zap className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Eliminate distractions</h3>
                      <p className="text-muted-foreground">
                        Focus only on the tasks that matter most for your goals, cutting through the noise.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Compass className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Reduce strategic uncertainty</h3>
                      <p className="text-muted-foreground">
                        Clear direction and prioritization means you always know what to work on next.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Compound your leverage</h3>
                      <p className="text-muted-foreground">
                        Small, consistent actions build momentum and compound into significant results over time.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">AI-powered insights</h3>
                      <p className="text-muted-foreground">
                        Discover opportunities and strategies you might have missed on your own.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <Card className="mx-auto max-w-3xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to achieve your biggest goals?
                </CardTitle>
                <CardDescription className="max-w-[700px] md:text-xl">
                  Join Tortoise today and transform how you approach your life&apos;s ambitions.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button size="lg" className="gap-2">
                  Get started for free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-black" size="lg">
                  Schedule a demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-5 w-5 text-primary">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path
                  d="M12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5Z"
                  fill="currentColor"
                  opacity="0.7"
                />
                <path
                  d="M12 7.5C9.23858 7.5 7 9.73858 7 12.5C7 15.2614 9.23858 17.5 12 17.5C14.7614 17.5 17 15.2614 17 12.5C17 9.73858 14.7614 7.5 12 7.5Z"
                  fill="white"
                />
                <path
                  d="M8.5 11.5C8.5 11.5 9 10.5 12 10.5C15 10.5 15.5 11.5 15.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 14.5L11 13.5M14 14.5L13 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tortoise. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
