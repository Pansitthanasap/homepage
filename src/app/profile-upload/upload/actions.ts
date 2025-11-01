"use server";

import prisma from "@/lib/prisma";

export async function submitResume(data: FormData) {
  // Here you can handle the form data, e.g., save it to a database or send it via email
  const email = data.get("email") as string;
  const phone = data.get("phone") as string;
  const firstName = data.get("first_name") as string;
  const lastName = data.get("last_name") as string;
  const position = data.get("position") as string;
  const resumeFileName = data.get("resume_file_name") as string;
  const resumeUrl = data.get("resume_url") as string;

  // You can now use these variables to save the data or send it via email
  await prisma.applicant.create({
    data: {
      email,
      phone,
      firstName,
      lastName,
      position,
      resumeFileName,
      resumeUrl,
    },
  });
}
