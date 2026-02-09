"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface CreateArticleData {
  title: string;
  description: string;
  content: string;
  image?: string;
}

export interface UpdateArticleData extends CreateArticleData {
  id: number;
}

export async function createArticle(data: CreateArticleData) {
  try {
    const article = await prisma.article.create({
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        image: data.image || null,
      },
    });
    revalidatePath("/article");
    revalidatePath("/admin/article");
    return { success: true, article };
  } catch (error) {
    console.error("Error creating article:", error);
    return { success: false, error: "Failed to create article" };
  }
}

export async function updateArticle(data: UpdateArticleData) {
  try {
    const article = await prisma.article.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        image: data.image || null,
      },
    });
    revalidatePath("/article");
    revalidatePath(`/article/${data.id}`);
    revalidatePath("/admin/article");
    return { success: true, article };
  } catch (error) {
    console.error("Error updating article:", error);
    return { success: false, error: "Failed to update article" };
  }
}

export async function deleteArticle(id: number) {
  try {
    await prisma.article.delete({
      where: { id },
    });
    revalidatePath("/article");
    revalidatePath("/admin/article");
    return { success: true };
  } catch (error) {
    console.error("Error deleting article:", error);
    return { success: false, error: "Failed to delete article" };
  }
}

export async function getArticles() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, articles };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return { success: false, error: "Failed to fetch articles", articles: [] };
  }
}

export async function getArticleById(id: number) {
  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });
    if (!article) {
      return { success: false, error: "Article not found", article: null };
    }
    return { success: true, article };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { success: false, error: "Failed to fetch article", article: null };
  }
}