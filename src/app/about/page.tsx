import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Mail, Code2, Palette, Zap, Monitor, Settings, BookOpen, Compass, Server, Cloud, Wrench } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A developer crafting elegant, scalable web applications with AI-powered experiences, integrating Generative AI technologies such as LLMs and AI agents to deliver smarter, adaptive digital products.
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
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-primary" />
                      Frontend Development
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Android, iOS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Server className="w-4 h-4 text-primary" />
                      Backend Development
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Node.js, Python, .NET, Java, PostgreSQL, MongoDB
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary" />
                      Tools & Others
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Git, Docker, Vercel, Jest, Vitest
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-primary" />
                      Cloud Computing
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AWS, Azure, GCP
                    </p>
                  </div>
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
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-primary" />
                      User Experience First
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I place user needs at the heart of every decision, crafting intuitive, seamless, and accessible interfaces that elevate the user journey.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" />
                      Performance & Maintainability
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      My code is clean, efficient, and scalable — designed not only to perform well today but to remain stable and maintainable in the long run.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Continuous Learning
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I embrace a growth mindset, staying ahead of technology trends and consistently sharpening my skills to build better, smarter solutions.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200">
                    <Code2 className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-3 text-lg">Modern Architecture</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Build scalable applications using the latest technology stack
                  </p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200">
                    <Palette className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-3 text-lg">Responsive Design</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ensure perfect user experience across all devices
                  </p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-3 text-lg">High Performance</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
                <Code2 className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
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