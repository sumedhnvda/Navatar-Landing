"use server";
// Force rebuild


import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

export async function submitBooking(prevState, formData) {
  try {
    const rawData = {
      hospitalName: formData.get("hospitalName"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"), // This will depend on how the form sends it
      notes: formData.get("notes"),
    };

    // Construct the object for Firestore
    const bookingData = {
        hospitalName: rawData.hospitalName || "",
        contactName: rawData.contactName || "",
        email: rawData.email || "",
        phone: rawData.phone || "",
        date: rawData.date ? new Date(rawData.date) : null,
        notes: rawData.notes || "",
        createdAt: new Date()
    }

    if (!bookingData.hospitalName || !bookingData.contactName || !bookingData.email || !bookingData.phone || !bookingData.date) {
        return { success: false, message: "Please fill in all required fields." };
    }

    await addDoc(collection(db, "user requests"), bookingData);
    
    revalidatePath("/get-started");
    return { success: true, message: "Booking received successfully! We will contact you shortly." };
  } catch (error) {
    console.error("Booking Error:", error);
    return { success: false, message: "Failed to submit booking. Please try again." };
  }
}
