import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { VoiceWaveIcon } from "@/components/VoiceWaveIcon";
import { 
  BarChart3,
  Mic,
  Volume2,
  Zap,
  Clock,
  TrendingUp,
  Play,
  Pause,
  Settings,
  Plus,
  FileAudio,
  Users,
  CreditCard
} from "lucide-react";

const recentProjects = [
  { name: "Product Demo Narration", type: "TTS", status: "completed", duration: "2:34", created: "2 hours ago" },
  { name: "Podcast Intro Clone", type: "Voice Clone", status: "processing", duration: "0:45", created: "4 hours ago" },
  { name: "Marketing Video Dub", type: "Dubbing", status: "completed", duration: "1:12", created: "1 day ago" },
  { name: "Meeting Transcription", type: "STT", status: "completed", duration: "45:23", created: "2 days ago" },
];

const usageStats = [
  { label: "Credits Used", value: 15420, max: 30000, color: "primary" },
  { label: "Projects Created", value: 12, max: 20, color: "accent" },
  { label: "API Calls", value: 8934, max: 10000, color: "success" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
              <p className="text-muted-foreground">Here's what's happening with your voice projects.</p>
            </div>
            <Button variant="hero" className="mt-4 sm:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="transition-smooth hover:shadow-elegant">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15,420</div>
                <p className="text-xs text-muted-foreground">
                  +2,400 from last month
                </p>
                <Progress value={51.4} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="transition-smooth hover:shadow-elegant">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <FileAudio className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +3 from last week
                </p>
              </CardContent>
            </Card>

            <Card className="transition-smooth hover:shadow-elegant">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Voice Clones</CardTitle>
                <Mic className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  2 processing
                </p>
              </CardContent>
            </Card>

            <Card className="transition-smooth hover:shadow-elegant">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">API Usage</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89.3%</div>
                <p className="text-xs text-muted-foreground">
                  8,934 / 10,000 calls
                </p>
                <Progress value={89.3} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Projects */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Projects
                  </CardTitle>
                  <CardDescription>
                    Your latest voice generation and processing projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-smooth">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-gradient-subtle">
                            {project.type === 'TTS' && <Volume2 className="h-4 w-4 text-primary" />}
                            {project.type === 'Voice Clone' && <Mic className="h-4 w-4 text-primary" />}
                            {project.type === 'Dubbing' && <Play className="h-4 w-4 text-primary" />}
                            {project.type === 'STT' && <FileAudio className="h-4 w-4 text-primary" />}
                          </div>
                          <div>
                            <div className="font-medium">{project.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {project.type} • {project.duration} • {project.created}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Usage Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Usage Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {usageStats.map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{stat.label}</span>
                        <span className="font-medium">{stat.value.toLocaleString()} / {stat.max.toLocaleString()}</span>
                      </div>
                      <Progress value={(stat.value / stat.max) * 100} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Volume2 className="h-4 w-4 mr-2" />
                    Generate Speech
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mic className="h-4 w-4 mr-2" />
                    Clone Voice
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Dub Video
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileAudio className="h-4 w-4 mr-2" />
                    Transcribe Audio
                  </Button>
                </CardContent>
              </Card>

              {/* Plan Status */}
              <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Starter Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    You're currently on the Starter plan with 30k monthly credits.
                  </p>
                  <Button variant="hero" className="w-full">
                    Upgrade Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}