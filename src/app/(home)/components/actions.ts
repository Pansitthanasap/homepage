'use server';

import prisma from "@/lib/prisma";

export async function submitContactForm(data: FormData) {
  const firstName = data.get("first_name") as string;
  const lastName = data.get("last_name") as string;
  const phone = data.get("phone") as string;
  const email = data.get("email") as string;
  const topic = data.get("topic") as string;
  const description = data.get("description") as string;

  await prisma.contactMessage.create({
    data: {
      firstName,
      lastName,
      phone,
      email,
      topic,
      description,
    },
  });
}
