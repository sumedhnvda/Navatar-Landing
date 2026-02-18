"use client"

import { Smartphone, Radio, Bot } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
       <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">How Navatar Works</h2>
            <p className="text-muted-foreground">Simple, intuitive, and powerful connection.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-muted-foreground/30 via-primary to-muted-foreground/30 -z-10"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center gap-4 flex-1">
                <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10 font-bold text-xl">
                    1
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md w-full h-full">
                    <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold mb-2 text-blue-900">Connect</h3>
                    <p className="text-sm text-slate-600">User connects via phone, tablet, or web browser.</p>
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center gap-4 flex-1">
                 <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10 font-bold text-xl">
                    2
                </div>
                 <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md w-full h-full">
                    <Radio className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold mb-2 text-blue-900">Control</h3>
                    <p className="text-sm text-slate-600">See, hear, speak, and move using simple controls.</p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center gap-4 flex-1">
                 <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10 font-bold text-xl">
                    3
                </div>
                 <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md w-full h-full">
                    <Bot className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold mb-2 text-blue-900">Interact</h3>
                    <p className="text-sm text-slate-600">Robot at location interacts as if you were there.</p>
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}
