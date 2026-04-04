"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Content */}
          <div className="flex-1 space-y-8">
            <div>
                 <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-blue-900">Reimagining Healthcare</h2>
                 <p className="text-slate-600 text-lg">
                    Navatar is designed for critical use cases where expert presence makes the difference between life and death.
                 </p>
            </div>

            <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <div className="bg-blue-100 p-2 rounded-full h-fit">
                        <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-blue-900">Remote Patient Rounds</h3>
                        <p className="text-slate-600">Doctors can visit patients in isolation or distant wards without physical travel.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <div className="bg-blue-100 p-2 rounded-full h-fit">
                        <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-blue-900">Specialist Consultations</h3>
                        <p className="text-slate-600">Bring top specialists into any OR or examination room instantly.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <div className="bg-blue-100 p-2 rounded-full h-fit">
                        <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-blue-900">Emergency Response</h3>
                         <p className="text-slate-600">Assess critical situations immediately before arriving on site.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Comic Image */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-blue-50 max-w-md mx-auto">
                 <Image
                    src="/doctor-comic-strip.png"
                    alt="Doctor running late uses Navatar to see patient remotely"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-auto object-contain"
                    unoptimized
                />
            </div>
            {/* Decoration */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-600/20 rounded-2xl blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
