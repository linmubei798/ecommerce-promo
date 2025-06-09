import Image from 'next/image'
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const products = [
    {
      id: 1,
      name: '时尚连衣裙',
      price: 299,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop',
      rating: 4.5,
    },
    {
      id: 2,
      name: '男士休闲外套',
      price: 399,
      originalPrice: 799,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop',
      rating: 4.8,
    },
    {
      id: 3,
      name: '运动鞋',
      price: 499,
      originalPrice: 899,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
      rating: 4.7,
    },
    {
      id: 4,
      name: '女士手提包',
      price: 599,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop',
      rating: 4.6,
    },
    {
      id: 5,
      name: '男士手表',
      price: 1299,
      originalPrice: 2599,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop',
      rating: 4.9,
    },
    {
      id: 6,
      name: '女士高跟鞋',
      price: 399,
      originalPrice: 799,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
      rating: 4.4,
    },
    {
      id: 7,
      name: '男士皮鞋',
      price: 499,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&h=500&fit=crop',
      rating: 4.7,
    },
    {
      id: 8,
      name: '女士墨镜',
      price: 299,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
      rating: 4.5,
    },
    {
      id: 9,
      name: '男士墨镜',
      price: 299,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
      rating: 4.6,
    },
    {
      id: 10,
      name: '女士项链',
      price: 399,
      originalPrice: 799,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      rating: 4.8,
    },
    {
      id: 11,
      name: '男士皮带',
      price: 199,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      rating: 4.4,
    },
    {
      id: 12,
      name: '女士围巾',
      price: 199,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      rating: 4.5,
    },
    {
      id: 13,
      name: '男士围巾',
      price: 199,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      rating: 4.5,
    },
    {
      id: 14,
      name: '女士帽子',
      price: 299,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&h=500&fit=crop',
      rating: 4.6,
    },
    {
      id: 15,
      name: '男士帽子',
      price: 299,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&h=500&fit=crop',
      rating: 4.6,
    },
    {
      id: 16,
      name: '女士手套',
      price: 199,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      rating: 4.4,
    },
    {
      id: 17,
      name: '男士手套',
      price: 199,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      rating: 4.4,
    },
    {
      id: 18,
      name: '女士耳环',
      price: 299,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      rating: 4.7,
    },
    {
      id: 19,
      name: '男士领带',
      price: 199,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      rating: 4.5,
    },
    {
      id: 20,
      name: '女士手链',
      price: 299,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      rating: 4.6,
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop"
          alt="Promotional Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">限时特惠</h1>
            <p className="text-xl mb-8">全场商品低至5折起</p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
              立即抢购
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">热门商品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-gray-600">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">¥{product.price}</span>
                    <span className="ml-2 text-gray-500 line-through">¥{product.originalPrice}</span>
                  </div>
                  <button className="bg-primary text-white p-2 rounded-full hover:bg-red-600 transition">
                    <ShoppingCartIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotion Banner */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">会员专享优惠</h2>
          <p className="text-gray-600 mb-8">注册会员即可享受额外9折优惠</p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition">
            立即注册
          </button>
        </div>
      </div>
    </main>
  )
} 