"use server";
// Force rebuild


import connectDB from "@/lib/db";
import Booking from "@/lib/models/booking";
import { revalidatePath } from "next/cache";

export async function submitBooking(prevState, formData) {
  try {
    await connectDB();

    const rawData = {
      hospitalName: formData.get("hospitalName"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"), // This will depend on how the form sends it
      notes: formData.get("notes"),
    };

    // Construct the object for Mongoose
    const bookingData = {
        hospitalName: rawData.hospitalName,
        contactName: rawData.contactName,
        email: rawData.email,
        phone: rawData.phone,
        date: new Date(rawData.date),
        notes: rawData.notes
    }

    if (!bookingData.hospitalName || !bookingData.contactName || !bookingData.email || !bookingData.phone || !bookingData.date) {
        return { success: false, message: "Please fill in all required fields." };
    }

    await Booking.create(bookingData);
    
    revalidatePath("/get-started");
    return { success: true, message: "Booking received successfully! We will contact you shortly." };
  } catch (error) {
    console.error("Booking Error:", error);
    return { success: false, message: "Failed to submit booking. Please try again." };
  }
}
