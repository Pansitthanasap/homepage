import prisma from "@/lib/prisma";

export async function GET() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });
  return Response.json(articles);
}