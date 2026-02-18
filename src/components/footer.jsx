"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-primary">
                    Navatar
                    <span className="text-foreground text-sm font-normal bg-secondary px-2 py-0.5 rounded-full">2.0</span>
                </Link>
                <p className="text-muted-foreground text-sm">
                    Redefining presence for the modern world. Open-source, secure, and scalable telepresence.
                </p>
            </div>

            <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Hardware</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Showcase</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <div className="flex gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center bg-card p-2 rounded-lg border shadow-sm">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Navatar Project. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  )
}
