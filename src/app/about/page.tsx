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
            <h1 className="text-4xl font-bold mb-4">About ME</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A passionate developer dedicated to crafting elegant, high-performance modern web applications with clean architecture and seamless user experience.

            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  技术栈
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">前端开发</h4>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS, shadcn/ui
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">后端开发</h4>
                  <p className="text-sm text-muted-foreground">
                    Node.js, Python, PostgreSQL, MongoDB
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">工具 & 其他</h4>
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
                  设计理念
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">用户体验优先</h4>
                  <p className="text-sm text-muted-foreground">
                    始终以用户需求为中心，创造直观易用的界面
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">性能与可维护性</h4>
                  <p className="text-sm text-muted-foreground">
                    编写清洁、高效的代码，确保应用程序的长期稳定性
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">持续学习</h4>
                  <p className="text-sm text-muted-foreground">
                    跟上技术发展趋势，不断提升技能和知识
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                项目亮点
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">现代化架构</h4>
                  <p className="text-sm text-muted-foreground">
                    使用最新的技术栈构建可扩展的应用程序
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">响应式设计</h4>
                  <p className="text-sm text-muted-foreground">
                    确保在所有设备上都有完美的用户体验
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">高性能优化</h4>
                  <p className="text-sm text-muted-foreground">
                    通过最佳实践实现快速加载和流畅交互
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">联系我</h3>
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
                发邮件给我
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}