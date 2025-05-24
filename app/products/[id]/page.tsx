import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ProductPage({ params }: { params: { id: string } }) {
  // Giả lập dữ liệu sản phẩm
  const product = {
    id: params.id,
    name: 'NO REGREST TSHIRT',
    price: 450000,
    description:
      'Áo phông đen thiết kế hiện đại, chất liệu cotton cao cấp, thoáng mát và thoải mái khi mặc. Phù hợp cho nhiều dịp khác nhau từ công sở đến dạo phố.',
    details: [
      'Chất liệu: 100% cotton cao cấp',
      'Kiểu dáng: Regular fit',
      'Cổ áo: Button-down',
      'Màu sắc: Đen',
      'Xuất xứ: Việt Nam',
    ],
    images: [
      'https://mikenco.vn/cdn/shop/files/482929940_9439610476115608_8800876759911662406_n.jpg?v=1747219831&width=533',
      'https://mikenco.vn/cdn/shop/files/482595364_1161576462228187_2150237556536220980_n.jpg?v=1747219831',
      'https://mikenco.vn/cdn/shop/files/482141169_604139715792017_4009660270773439471_n.jpg?v=1747219831',
      'https://mikenco.vn/cdn/shop/files/482148951_1338541414127701_2132965532692955736_n.jpg?v=1747219831',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Đen', 'Trắng', 'Xám'],
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <>
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm py-4">
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link
              href="/products"
              className="text-gray-500 hover:text-gray-900"
            >
              Sản phẩm
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.images[0] || '/placeholder.svg'}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={image || '/placeholder.svg'}
                      alt={`${product.name} - Ảnh ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  {product.name}
                </h1>
                <p className="text-2xl font-medium mt-2">
                  {formatPrice(product.price)}
                </p>
              </div>

              <p className="text-gray-600">{product.description}</p>

              <div className="space-y-4">
                {/* Size Selection */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Kích thước</h3>
                  <RadioGroup defaultValue="M" className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <div key={size} className="flex items-center">
                        <RadioGroupItem
                          value={size}
                          id={`size-${size}`}
                          className="sr-only"
                        />
                        <Label
                          htmlFor={`size-${size}`}
                          className="h-10 w-10 flex items-center justify-center border rounded cursor-pointer data-[state=checked]:bg-black data-[state=checked]:text-white"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Màu sắc</h3>
                  <RadioGroup
                    defaultValue="Đen"
                    className="flex flex-wrap gap-2"
                  >
                    {product.colors.map((color) => (
                      <div key={color} className="flex items-center">
                        <RadioGroupItem
                          value={color}
                          id={`color-${color}`}
                          className="sr-only"
                        />
                        <Label
                          htmlFor={`color-${color}`}
                          className="px-4 py-2 border rounded cursor-pointer data-[state=checked]:bg-black data-[state=checked]:text-white"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Số lượng</h3>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-20">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Thêm vào giỏ hàng
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Heart className="h-5 w-5" />
                  Thêm vào yêu thích
                </Button>
              </div>

              <Separator />

              {/* Product Details */}
              <div>
                <h3 className="text-lg font-medium mb-2">Chi tiết sản phẩm</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
