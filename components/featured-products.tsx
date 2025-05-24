import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'NO REGREST TSHIRT',
      price: 850000,
      image:
        'https://mikenco.vn/cdn/shop/files/482929940_9439610476115608_8800876759911662406_n.jpg?v=1747219831&width=533',
      href: '/products/1',
    },
    {
      id: 2,
      name: 'GENERATION STREETWEAR TSHIRT',
      price: 450000,
      image:
        'https://mikenco.vn/cdn/shop/files/483231342_1826073481559198_2642620884227569908_n.jpg?v=1747219832&width=533',
      href: '/products/2',
    },
    {
      id: 3,
      name: '88 TIMELESS TREASURE JERSEY',
      price: 950000,
      image:
        'https://mikenco.vn/cdn/shop/files/462572822_1282784246083826_6580388936761805421_n.jpg?v=1747219835&width=533',
      href: '/products/3',
    },
    {
      id: 4,
      name: '25 MESH JERSEY TSHIRT',
      price: 1850000,
      image:
        'https://mikenco.vn/cdn/shop/files/25_sau.jpg?v=1747219881&width=533',
      href: '/products/4',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Sản phẩm nổi bật
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="bg-white">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="mt-2 font-medium">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" className="px-8">
            Xem tất cả sản phẩm
          </Button>
        </div>
      </div>
    </section>
  );
}
