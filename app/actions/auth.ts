"use server";

import prisma from "@/lib/prisma";
import { createSession } from "@/lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function login(state: { error: string } | undefined, data: FormData) {
  const username = data.get("username") as string;
  const password = data.get("password") as string;

  const admin = await prisma.admin.findFirst({
    where: {
      username,
    },
  });

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return {
        error: "Invalid username or password",
    };
  }

  await createSession(admin.id)

  redirect('/admin/dashboard');
}