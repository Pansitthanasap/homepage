"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getArticles } from "@/app/actions/article";

export interface Article {
  id: number;
  image?: string | null;
  title: string;
  description: string | null;
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then((result) => {
      if (result.success && result.articles) {
        setArticles(result.articles);
      }
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#2D2D2D] px-11 py-11 gap-10">
      {/* Header */}
      <div className="flex flex-row justify-between items-end w-full rounded-3xl bg-linear-to-b from-[#FFFFFF] to-[#95E999] px-11 py-11 text-black">
        <div>
          <div className="text-5xl font-bold">
            <span className="text-[#4CAF50]">HR Insight</span> สำหรับ SME &
            Startup
          </div>
          <div className="text-3xl mt-4">
            เรารวบรวมบทความ ความรู้ และเทคนิคการบริหารคนที่เข้าใจง่าย
            <br />
            เพื่อช่วยเจ้าของธุรกิจเริ่มต้นระบบ HR ได้อย่างมั่นใจ
          </div>
        </div>
        <Link href="/article" className="text-2xl text-[#4CAF50] border-[3px] border-[#4CAF50] rounded-full px-6 py-2 hover:bg-[#4CAF50] hover:text-white transition cursor-pointer">
          ดูบทความทั้งหมด
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="flex flex-row justify-center gap-8">
        {articles.slice(0, 4).map((article) => (
          <Link
            href={`/article/${article.id}`}
            key={article.id}
            className="bg-[#95E999] rounded-3xl p-6 flex flex-col items-center text-black hover:scale-105 transition-transform cursor-pointer w-1/3"
          >
            <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 overflow-hidden">
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <div className="w-full">
              <div className="text-2xl font-bold">{article.title}</div>
              <p className="text-gray-700 mt-1">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
