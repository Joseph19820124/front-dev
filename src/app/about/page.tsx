import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Github, Linkedin, Mail, Code2, Palette, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A passionate developer dedicated to crafting elegant, high-performance modern web applications with clean architecture and seamless user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Software stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend Development</h4>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS, shadcn/ui
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Node.js, Python, PostgreSQL, MongoDB
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools & Others</h4>
                  <p className="text-sm text-muted-foreground">
                    Git, Docker, AWS, Vercel, Jest, Vitest
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Design Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">User Experience First</h4>
                  <p className="text-sm text-muted-foreground">
                    Always prioritize user needs and create intuitive, easy-to-use interfaces
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Performance & Maintainability</h4>
                  <p className="text-sm text-muted-foreground">
                    Write clean, efficient code to ensure long-term stability of applications
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep up with technology trends and continuously improve skills and knowledge
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Project Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Modern Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Build scalable applications using the latest technology stack
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Responsive Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure perfect user experience across all devices
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">High Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Achieve fast loading and smooth interactions through best practices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button size="lg" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}