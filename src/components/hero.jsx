"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-blue-50 to-white"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
            Navatar: <span className="text-primary">Be Anywhere, Anytime.</span>
            </h1>
        </motion.div>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A mobile telepresence avatar platform that allows doctors and professionals to be physically present without being there.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="gap-2 h-12 px-8 text-base" asChild>
            <Link href="/get-started">
                Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative mx-auto max-w-sm rounded-3xl border-4 border-blue-100 bg-black shadow-2xl p-1"
        >
          <div className="rounded-2xl overflow-hidden aspect-[9/16] relative bg-black">
            <video 
                src="/video.mp4" 
                controls
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
            >
                Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
