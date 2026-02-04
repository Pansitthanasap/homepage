"use client";

import { useEffect, useState, useRef } from "react";
import {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  type CreateArticleData,
} from "@/app/actions/article";
import Quill from 'quill';
import "quill/dist/quill.core.css";

interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function ArticleAdminPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<CreateArticleData>({
    title: "",
    description: "",
    content: "",
    image: undefined,
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [quill, setQuill] = useState<Quill | null>(null);

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

  useEffect(() => {
    if (!quill) {
      setQuill(new Quill("#quill-editor", {
        theme: "snow",
      }
      ))
    };
  }, [quill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (editingId) {
      const result = await updateArticle({ ...formData, id: editingId });
      if (result.success) {
        setMessage({ type: "success", text: "Article updated successfully!" });
        resetForm();
        loadArticles();
      } else {
        setMessage({ type: "error", text: result.error || "Failed to update" });
      }
    } else {
      const result = await createArticle(formData);
      if (result.success) {
        setMessage({ type: "success", text: "Article created successfully!" });
        resetForm();
        loadArticles();
      } else {
        setMessage({ type: "error", text: result.error || "Failed to create" });
      }
    }
  };

  const handleEdit = (article: Article) => {
    setFormData({
      title: article.title,
      description: article.description,
      content: article.content,
      image: article.image || null,
    });
    setEditingId(article.id);
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
      image: "",
    });
    setEditingId(null);
    if (quillRef.current) {
      quillRef.current.getEditor().setText("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Article Management
        </h1>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Article Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {editingId ? "Edit Article" : "Create New Article"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (optional)
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <div className="bg-white">
                <div
                  id="quill-editor"
                ></div>
              </div>
            </div>

            <div className="flex gap-4 mt-20">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingId ? "Update Article" : "Create Article"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Articles List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Published Articles ({articles.length})
          </h2>

          {loading ? (
            <div className="text-center py-8 text-gray-500">
              Loading articles...
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No articles yet. Create your first article above!
            </div>
          ) : (
            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
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
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(article)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
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
