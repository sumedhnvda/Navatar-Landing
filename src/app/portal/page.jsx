import { ShieldAlert, Shield, Stethoscope, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

const portals = [
  {
    title: "Super Admin",
    description: "Complete system control and oversight.",
    href: "https://navatar-superadmin.vercel.app/",
    icon: ShieldAlert,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "Admin",
    description: "Manage users, settings, and general operations.",
    href: "https://navatar-admin.vercel.app/",
    icon: Shield,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Doctor Interface",
    description: "Access patient records, appointments, and medical tools.",
    href: "https://navatar-doctor.vercel.app/",
    icon: Stethoscope,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "group-hover:border-green-500/50",
  },
  {
    title: "Bot Interface",
    description: "Interact with the automated assistant and AI services.",
    href: "https://navatar-bot.vercel.app/",
    icon: Bot,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
  },
];

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 pt-24 md:pt-32 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 mix-blend-screen opacity-50" />
        
        <div className="max-w-5xl w-full space-y-12 z-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Navatar Access Portal
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the appropriate interface below to access your designated workspace. Secure authentication may be required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portals.map((portal) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={portal.title}
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1 ${portal.border}`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${portal.bg} ${portal.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors group-hover:translate-x-1" />
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {portal.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {portal.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
