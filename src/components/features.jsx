"use client"

import { Move, Video, MonitorSmartphone, Wifi } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: <Move className="h-10 w-10 text-primary" />,
      title: "Presence & Mobility",
      description: "Move freely within indoor spaces. Navigate corridors, rooms, and work areas with natural eye-level interaction."
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Real-Time Interaction",
      description: "Face-to-face conversation with natural body-language simulation and instant low-latency response."
    },
    {
      icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
      title: "Multi-Device Access",
      description: "Join from your phone, laptop, or tablet. No special hardware needed on the user side."
    },
     {
      icon: <Wifi className="h-10 w-10 text-primary" />,
      title: "Secure Connectivity",
      description: "End-to-end encrypted communication ensures patient privacy and data security at all times."
    }
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground">Everything you need to be effectively present, remotely.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-blue-100 bg-white shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-xl">
                    {feature.icon}
                </div>
                <CardTitle className="text-blue-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
