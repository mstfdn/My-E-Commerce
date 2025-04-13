import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Blog verilerini getirme simülasyonu
    setTimeout(() => {
      const mockBlogs = [
        {
          id: 1,
          title: "Moda Dünyasında Yeni Trendler",
          excerpt: "Bu sezonun en çok konuşulan moda trendlerini keşfedin ve gardırobunuzu güncelleyin.",
          author: "Ayşe Yılmaz",
          date: "15 Nisan 2023",
          image: "/blog1.png",
          category: "Moda"
        },
        {
          id: 2,
          title: "Sürdürülebilir Moda Seçimleri",
          excerpt: "Çevreye duyarlı moda seçimleri yaparak hem şık hem de sorumlu bir tüketici olun.",
          author: "Mehmet Kaya",
          date: "22 Mart 2023",
          image: "/blog2.png",
          category: "Sürdürülebilirlik"
        },
        {
          id: 3,
          title: "Her Mevsim İçin Aksesuar Rehberi",
          excerpt: "Doğru aksesuarlar ile basit kıyafetlerinizi nasıl öne çıkarabileceğinizi öğrenin.",
          author: "Zeynep Demir",
          date: "10 Şubat 2023",
          image: "/blog3.png",
          category: "Aksesuarlar"
        },
        {
          id: 4,
          title: "Minimalist Gardırop Oluşturma",
          excerpt: "Az parça ile çok kombinasyon yapmanın sırlarını ve minimalist yaşam tarzını keşfedin.",
          author: "Can Yıldız",
          date: "5 Ocak 2023",
          image: "/blog4.png",
          category: "Yaşam Tarzı"
        },
        {
          id: 5,
          title: "Yaz Sezonu İçin Alışveriş Rehberi",
          excerpt: "Yaz sezonunda gardırobunuza eklemeniz gereken temel parçalar ve kombinasyon önerileri.",
          author: "Elif Şahin",
          date: "18 Mayıs 2023",
          image: "/blog5.png",
          category: "Alışveriş"
        },
        {
          id: 6,
          title: "Vintage Giyim Rehberi",
          excerpt: "Vintage parçaları modern gardırobunuza nasıl entegre edeceğinizi öğrenin.",
          author: "Burak Özkan",
          date: "30 Haziran 2023",
          image: "/blog6.png",
          category: "Vintage"
        }
      ];
      
      setBlogs(mockBlogs);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Başlık ve Breadcrumb */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
            <div className="flex items-center text-sm">
              <Link to="/" className="text-gray-600 hover:text-blue-500">Ana Sayfa</Link>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <span className="text-blue-500">Blog</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Moda, stil ve güncel trendler hakkında en son yazılarımızı keşfedin.
          </p>
        </div>

        {/* Blog Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <Link to={`/blog/${blog.id}`}>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm">{blog.date}</span>
                </div>
                <Link to={`/blog/${blog.id}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-500">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    <i className="far fa-user mr-1"></i> {blog.author}
                  </span>
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="text-blue-500 hover:text-blue-700 font-medium text-sm"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sayfalama */}
        <div className="flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-50">
              Önceki
            </a>
            <a href="#" className="py-2 px-4 bg-blue-500 border border-blue-500 text-white">
              1
            </a>
            <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              3
            </a>
            <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-50">
              Sonraki
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;