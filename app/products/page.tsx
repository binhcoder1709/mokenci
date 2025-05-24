import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ProductsPage() {
  // Giả lập dữ liệu sản phẩm
  const products: {
    id: number;
    name: string;
    price: number;
    image: string;
    href: string;
  }[] = [
    {
      id: 1,
      name: `NO REGREST TSHIRT`,
      price: 450000,
      image:
        'https://mikenco.vn/cdn/shop/files/482929940_9439610476115608_8800876759911662406_n.jpg?v=1747219831&width=533',
      href: `/products/1`,
    },
    {
      id: 2,
      name: `GENERATION STREETWEAR TSHIRT`,
      price: 650000,
      image:
        'https://mikenco.vn/cdn/shop/files/483231342_1826073481559198_2642620884227569908_n.jpg?v=1747219832&width=533',
      href: `/products/2`,
    },
    {
      id: 3,
      name: `88 TIMELESS TREASURE JERSEY`,
      price: 250000,
      image:
        'https://mikenco.vn/cdn/shop/files/462572822_1282784246083826_6580388936761805421_n.jpg?v=1747219835&width=533',
      href: `/products/3`,
    },
    {
      id: 4,
      name: `25 MESH JERSEY TSHIRT`,
      price: 450000,
      image:
        'https://mikenco.vn/cdn/shop/files/25_sau.jpg?v=1747219881&width=533',
      href: `/products/4`,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const categories = [
    'Áo sơ mi',
    'Áo thun',
    'Quần jean',
    'Quần âu',
    'Áo khoác',
    'Phụ kiện',
  ];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Đen', 'Trắng', 'Xanh navy', 'Xám', 'Nâu'];

  return (
    <>
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center my-8">
            Tất cả sản phẩm
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Danh mục</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`}>
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Giá</h3>
                  <Slider
                    defaultValue={[0, 2000000]}
                    min={0}
                    max={2000000}
                    step={100000}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>0đ</span>
                    <span>2.000.000đ</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Kích thước</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <div key={size} className="flex items-center">
                        <Checkbox
                          id={`size-${size}`}
                          className="sr-only peer"
                        />
                        <Label
                          htmlFor={`size-${size}`}
                          className="h-10 w-10 flex items-center justify-center border rounded cursor-pointer peer-checked:bg-black peer-checked:text-white"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Màu sắc</h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <div key={color} className="flex items-center">
                        <Checkbox
                          id={`color-${color}`}
                          className="sr-only peer"
                        />
                        <Label
                          htmlFor={`color-${color}`}
                          className="px-3 py-1 border rounded cursor-pointer peer-checked:bg-black peer-checked:text-white"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="flex-1">
              {/* Mobile filters and sort */}
              <div className="flex justify-between mb-6 lg:hidden">
                <Button variant="outline">Lọc sản phẩm</Button>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sắp xếp theo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                    <SelectItem value="price-desc">
                      Giá: Cao đến thấp
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Desktop sort */}
              <div className="hidden lg:flex justify-end mb-6">
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sắp xếp theo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                    <SelectItem value="price-desc">
                      Giá: Cao đến thấp
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
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
                        <h3 className="text-sm md:text-base font-medium">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm md:text-base font-medium">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    &lt;
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-black text-white"
                  >
                    1
                  </Button>
                  <Button variant="outline" size="icon">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    &gt;
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
