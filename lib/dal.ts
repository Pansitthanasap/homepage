import 'server-only'
 
import { cookies } from 'next/headers'
import { decrypt } from './session'
import { cache } from 'react'
import { redirect } from 'next/navigation'
import prisma from './prisma'
 
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
 
  if (!session?.userId) {
    redirect('/admin/login')
  }
 
  return { isAuth: true, userId: session.userId }
})

export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null
 
  try {
    return await prisma.admin.findFirst({
      where: {
        id: session.userId,
      }
    })
  } catch {
    console.log('Failed to fetch user')
    return null
  }
})
