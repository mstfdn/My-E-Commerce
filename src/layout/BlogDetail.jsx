import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Blog verilerini getirme simülasyonu
    setTimeout(() => {
      const mockBlog = {
        id: id,
        title: "Moda Dünyasında Yeni Trendler",
        author: "Ayşe Yılmaz",
        date: "15 Nisan 2023",
        image: `/blog${id}.png`,
        content: `
          <p>Bu sezonun en çok konuşulan moda trendlerini keşfedin ve gardırobunuzu güncelleyin.</p>
          
          <h3>Vücut Tipinizi Tanıyın</h3>
          <p>Vücut şeklinizi anlamak, size yakışan kıyafetleri seçmenin ilk adımıdır. Armut, elma, kum saati veya dikdörtgen vücut tipine sahip olmanıza bağlı olarak, farklı kesimler ve stiller doğal siluetinizi geliştirecektir.</p>
          
          <h3>Durumu Göz Önünde Bulundurun</h3>
          <p>İş toplantısı, arkadaşlarla brunch gibi farklı etkinlikler farklı kıyafetler gerektirir. Nereye gittiğinizi ve ne yapacağınızı her zaman düşünün.</p>
          
          <h3>Kaliteyi Miktara Tercih Edin</h3>
          <p>Uzun süre dayanacak iyi yapılmış parçalara yatırım yapmak, hızla eskiyen veya modası geçen çok sayıda düşük kaliteli ürün satın almaktan daha iyidir.</p>
          
          <h3>Aksesuarları Akıllıca Kullanın</h3>
          <p>Doğru aksesuarlar en basit kıyafeti bile yükseltebilir. Dikkat çekici bir kolye, zarif bir saat veya şık bir çanta görünümünüzü dönüştürebilir.</p>
        `,
        tags: ["Moda", "Stil İpuçları", "Giyim"],
        relatedPosts: [
          { id: 2, title: "Yaz Modası Trendleri", image: "/blog2.png" },
          { id: 3, title: "Sürdürülebilir Moda Seçimleri", image: "/blog3.png" },
          { id: 4, title: "Her Durum İçin Aksesuar Rehberi", image: "/blog4.png" },
        ]
      };
      
      setBlog(mockBlog);
      setLoading(false);
    }, 1000);
  }, [id]);

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
    <div className="blog-detail py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-8">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Ana Sayfa</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link to="/blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-blue-500">{blog.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Ana İçerik */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
                
                <div className="flex items-center text-gray-500 mb-6">
                  <span className="mr-4">
                    <i className="far fa-user mr-1"></i> {blog.author}
                  </span>
                  <span>
                    <i className="far fa-calendar mr-1"></i> {blog.date}
                  </span>
                </div>
                
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                
                {/* Etiketler */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-3">Etiketler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Paylaş Butonları */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold mb-3">Bu Yazıyı Paylaş:</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="#" className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-900">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Yan Menü */}
          <div className="lg:w-1/3">
            {/* Yazar Hakkında */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Yazar Hakkında</h3>
              <div className="flex items-start">
                <img 
                  src="/blog1.png" 
                  alt="Yazar" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{blog.author}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Moda tutkunusu ve 10 yılı aşkın deneyime sahip stil danışmanı.
                  </p>
                </div>
              </div>
            </div>
            
            {/* İlgili Yazılar */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">İlgili Yazılar</h3>
              <div className="space-y-4">
                {blog.relatedPosts.map((post) => (
                  <div key={post.id} className="flex items-start">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-20 h-16 object-cover rounded mr-3"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 hover:text-blue-500">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bülten Aboneliği */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Bültene Abone Olun</h3>
              <p className="text-gray-600 mb-4">En son moda ipuçları ve trendlerden haberdar olun!</p>
              <form>
                <div className="flex flex-col space-y-3">
                  <input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                  >
                    Abone Ol
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;