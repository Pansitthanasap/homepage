"use client";

import { useEffect, useState, useRef } from "react";
import {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  type CreateArticleData,
} from "@/app/actions/article";
import { upload } from "@vercel/blob/client";
import type { PutBlobResult } from "@vercel/blob";
import type Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const IMAGE_ACCEPT = "image/jpeg,image/png,image/webp,image/gif";

export default function ArticleAdminPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<CreateArticleData>({
    title: "",
    description: "",
    content: "",
    image: undefined,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [quill, setQuill] = useState<Quill | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const loadArticles = async () => {
    setLoading(true);
    const result = await getArticles();
    if (result.success) {
      setArticles(result.articles);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const quillEditorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!quillEditorRef.current || quill) return;
    
    // Dynamically import Quill only on client side
    import("quill").then((QuillModule) => {
      const QuillConstructor = QuillModule.default;
      const editor = new QuillConstructor(quillEditorRef.current!, {
        theme: "snow",
      });
      setQuill(editor);
    });
  }, [quill]);

  useEffect(() => {
    if (editingId != null && quill && formData.content) {
      quill.clipboard.dangerouslyPasteHTML(formData.content);
    }
  }, [editingId, quill, formData.content]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const content = quill?.root?.innerHTML ?? formData.content;
    let imageUrl = formData.image ?? undefined;

    if (imageFile) {
      setUploadingImage(true);
      try {
        const result = (await upload(imageFile.name, imageFile, {
          access: "public",
          handleUploadUrl: "/api/upload-article-image",
        })) as PutBlobResult;
        imageUrl = result.url;
      } catch (err) {
        console.error("Image upload failed:", err);
        setMessage({
          type: "error",
          text: "Failed to upload image. Try again.",
        });
        setUploadingImage(false);
        return;
      }
      setUploadingImage(false);
    }

    const payload = { ...formData, content, image: imageUrl };

    if (editingId) {
      const result = await updateArticle({ ...payload, id: editingId });
      if (result.success) {
        setMessage({ type: "success", text: "Article updated successfully!" });
        resetForm();
        loadArticles();
      } else {
        setMessage({ type: "error", text: result.error || "Failed to update" });
      }
    } else {
      const result = await createArticle(payload);
      if (result.success) {
        setMessage({ type: "success", text: "Article created successfully!" });
        resetForm();
        loadArticles();
      } else {
        setMessage({ type: "error", text: result.error || "Failed to create" });
      }
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    setImageFile(file);
    setImagePreviewUrl(file ? URL.createObjectURL(file) : null);
  };

  const handleEdit = (article: Article) => {
    setFormData({
      title: article.title,
      description: article.description,
      content: article.content,
      image: article.image ?? undefined,
    });
    setImageFile(null);
    if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    setImagePreviewUrl(article.image ?? null);
    setEditingId(article.id);
    if (imageInputRef.current) imageInputRef.current.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    const result = await deleteArticle(id);
    if (result.success) {
      setMessage({ type: "success", text: "Article deleted successfully!" });
      loadArticles();
    } else {
      setMessage({ type: "error", text: result.error || "Failed to delete" });
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      content: "",
      image: undefined,
    });
    setImageFile(null);
    if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    setImagePreviewUrl(null);
    setEditingId(null);
    if (imageInputRef.current) imageInputRef.current.value = "";
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML("");
    }
  };

  const displayImageUrl = imagePreviewUrl ?? formData.image ?? null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header – article read page style */}
      <div className="flex flex-col gap-10 pt-8 px-6 md:px-15 pb-10">
        <div className="font-bold text-4xl text-[#00000099]">HR Insight</div>
        <h1 className="font-bold text-4xl md:text-5xl text-[#95E999]">
          {editingId ? "Edit Article" : "Create Article"}
        </h1>

        {message && (
          <div
            className={`p-4 rounded-[10px] text-[18px] ${
              message.type === "success"
                ? "bg-[#95E999]/20 text-green-800 border border-[#95E999]"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form card – same position as article read: image left, title/description right */}
        <div className="p-6 md:p-10 w-full max-w-278.5 border-[3px] border-[#95E999] rounded-[40px] bg-white shadow-[0px_4px_20px_0px_#00000020]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Hero row: image left, title + description right (like article read page) */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full md:pt-8 md:px-10">
              {/* Left: image preview (same position as article read hero image) */}
              <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
                <div className="flex relative w-full md:w-95 h-70 md:h-80 border-[3px] border-[#95E999] rounded-[40px] overflow-hidden bg-gray-100 items-center justify-center">
                  {displayImageUrl ? (
                    <img
                      src={displayImageUrl}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-center text-lg px-4">
                      เลือกไฟล์รูป (JPG, PNG, WebP, GIF)
                    </span>
                  )}
                </div>
                <input
                  ref={imageInputRef}
                  type="file"
                  accept={IMAGE_ACCEPT}
                  onChange={handleImageChange}
                  className="flex items-center border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] w-full h-12.5 md:h-15 p-0 overflow-hidden file:h-full file:px-4 file:py-0 file:rounded-l-[10px] file:border-0 file:text-[16px] file:font-medium file:bg-[#E5E7EB] file:text-black hover:file:bg-[#D1D5DB] cursor-pointer"
                />
              </div>

              {/* Right: HR Insight, Title, Description (same order as article read) */}
              <div className="flex flex-col gap-6 flex-1 min-w-0">
                <div className="font-bold text-4xl text-[#00000099]">
                  HR Insight
                </div>
                <div>
                  <label className="block font-light text-black text-[18px] md:text-[20px] mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] w-full h-12.5 md:h-15 px-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block font-light text-black text-[18px] md:text-[20px] mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={4}
                    className="border border-black text-gray-900 text-[18px] md:text-[20px] font-light rounded-[10px] w-full p-2.5 resize-y min-h-30"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Content (Quill) – full width, resizable */}
            <div className="w-full">
              <label className="block font-light text-black text-[24px] md:text-[32px] leading-[85%] tracking-[-2.5%] mb-4">
                Content
              </label>
              <div
                className="w-full min-h-60 border border-black rounded-[10px] overflow-hidden bg-white resize-y"
                style={{ minHeight: "240px" }}
              >
                <div ref={quillEditorRef} className="h-full min-h-50" />
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 border-2 border-black text-black font-medium text-[18px] rounded-[10px] hover:bg-gray-100 transition-colors"
                >
                  Cancel Edit
                </button>
              )}
              <button
                type="submit"
                disabled={uploadingImage}
                className="px-8 py-2.5 bg-[#95E999] hover:bg-[#7ad97d] text-black font-medium text-[18px] rounded-[10px] shadow-md transition-colors disabled:opacity-60"
              >
                {uploadingImage
                  ? "Uploading image..."
                  : editingId
                    ? "Update Article"
                    : "Create Article"}
              </button>
            </div>
          </form>
        </div>

        {/* Articles List */}
        <div className="mt-10 border-[3px] border-[#95E999] rounded-[40px] p-6 md:p-10 max-w-278.5 w-full bg-white shadow-[0px_4px_20px_0px_#00000020]">
          <h2 className="font-bold text-2xl md:text-3xl text-[#95E999] mb-6">
            Published Articles ({articles.length})
          </h2>

          {loading ? (
            <div className="text-center py-8 text-gray-500 text-[18px]">
              Loading articles...
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-[18px]">
              No articles yet. Create your first article above!
            </div>
          ) : (
            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="border border-[#95E999] rounded-[20px] p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-2 line-clamp-2">
                        {article.description}
                      </p>
                      <div className="text-sm text-gray-500">
                        Created:{" "}
                        {new Date(article.createdAt).toLocaleDateString(
                          "th-TH"
                        )}{" "}
                        | Updated:{" "}
                        {new Date(article.updatedAt).toLocaleDateString(
                          "th-TH"
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleEdit(article)}
                        className="px-4 py-2 bg-[#95E999] text-black rounded-[10px] hover:bg-[#7ad97d] transition-colors font-medium"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(article.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-[10px] hover:bg-red-600 transition-colors font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
