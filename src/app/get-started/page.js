"use client";

import { BookingForm } from "@/components/booking-form";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 leading-tight">
                    Transform Your Hospital's <span className="text-primary">Presence</span>
                </h1>
                <p className="text-xl text-slate-600">
                    Get Navatar 2.0 for your healthcare facility. Enable remote rounds, specialist consultations, and emergency response—without physical travel.
                </p>
                <div className="space-y-4">
                     <h3 className="text-xl font-bold text-blue-900">What happens next?</h3>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">1</div>
                            <span className="text-slate-700">Fill out your facility details and contact info.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">2</div>
                            <span className="text-slate-700">Choose a convenient date/time for an initial call.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">3</div>
                            <span className="text-slate-700">We'll confirm the appointment and provide a custom demo plan.</span>
                        </li>
                     </ul>
                </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <BookingForm />
            </motion.div>
        </div>
      </div>
    </main>
  );
}
