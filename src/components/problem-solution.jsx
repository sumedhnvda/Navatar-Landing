"use client"

import { CheckCircle2, XCircle } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Problem */}
          <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-slate-800">Why <span className="text-red-500">Physical Presence</span> is a Bottle-neck</h2>
            <p className="text-slate-600 mb-6">
                Many professions require experts to be on-site, but traditional travel is inefficient and often impossible.
            </p>
            <ul className="space-y-4">
                {[
                    "Travel is expensive, slow, and stressful.",
                    "Experts are limited in number and cannot be everywhere.",
                    "Emergencies require immediate response times.",
                    "Physical attendance risks health and safety."
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                        <XCircle className="h-6 w-6 text-red-500 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 border-none rounded-2xl p-8 shadow-xl text-white">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">The <span className="text-blue-200">Navatar</span> Solution</h2>
            <p className="text-blue-100 text-lg mb-6">
                Navatar removes the dependency on travel by turning presence into a service. Be where you're needed, instantly.
            </p>
             <ul className="space-y-4">
                {[
                    "Instant 'Teleportation' to any location.",
                    "Scale expert reach efficiently.",
                    "Respond to emergencies in seconds.",
                    "Safe and secure interaction."
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-300 shrink-0" />
                        <span className="font-medium">{item}</span>
                    </li>
                ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
