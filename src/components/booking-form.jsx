"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { submitBooking } from "@/app/actions"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const formSchema = z.object({
  hospitalName: z.string().min(2, {
    message: "Hospital name must be at least 2 characters.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(8, {
    message: "Phone number is too short.",
  }),
  countryCode: z.string({
      required_error: "Country code is required",
  }),
  date: z.date({
    required_error: "A date of booking is required.",
  }),
  notes: z.string().optional(),
})

export function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState(null)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hospitalName: "",
      contactName: "",
      email: "",
      email: "",
      phone: "",
      countryCode: "+91",
      notes: "",
    },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    setMessage(null)
    
    const formData = new FormData()
    formData.append("hospitalName", values.hospitalName)
    formData.append("contactName", values.contactName)
    formData.append("email", values.email)
    formData.append("phone", `${values.countryCode} ${values.phone}`)
    formData.append("date", values.date.toISOString())
    formData.append("notes", values.notes || "")

    const result = await submitBooking(null, formData)
    
    setIsSubmitting(false)
    if (result.success) {
        setMessage({ type: 'success', text: result.message })
        form.reset()
    } else {
         setMessage({ type: 'error', text: result.message })
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-blue-100">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Book a Demo</h2>
      
      {message && (
          <div className={cn("p-4 mb-6 rounded-lg text-sm", message.type === 'success' ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200")}>
              {message.text}
          </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="hospitalName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital / Organization Name</FormLabel>
                <FormControl>
                  <Input placeholder="City General Hospital" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person</FormLabel>
                <FormControl>
                  <Input placeholder="Dr. Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                        <Input placeholder="jane@hospital.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 <div className="flex gap-1">
                    <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                        <FormItem className="flex flex-col w-[110px]">
                            <FormLabel>Country</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Code" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                    <SelectItem value="+44">🇬🇧 +44</SelectItem>
                                    <SelectItem value="+91">🇮🇳 +91</SelectItem>
                                     <SelectItem value="+61">🇦🇺 +61</SelectItem>
                                     <SelectItem value="+86">🇨🇳 +86</SelectItem>
                                     <SelectItem value="+81">🇯🇵 +81</SelectItem>
                                     <SelectItem value="+49">🇩🇪 +49</SelectItem>
                                     <SelectItem value="+33">🇫🇷 +33</SelectItem>
                                    {/* Add more as needed */}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                            <Input placeholder="82175-34845" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                 </div>
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Date</FormLabel>
                  <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(e) => {
                          field.onChange(e)
                          setIsCalendarOpen(false)
                      }}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01") || date.getDay() === 0 || date.getDay() === 6
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Select a date for us to give you a call or demo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Requirements</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your specific needs..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-lg h-12" disabled={isSubmitting}>
            {isSubmitting ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                </>
            ) : (
                "Book Consultation"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
