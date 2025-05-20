import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Áo sơ mi đen",
      price: 850000,
      image: "/placeholder.svg?height=600&width=400",
      href: "/products/1",
    },
    {
      id: 2,
      name: "Áo thun trắng",
      price: 450000,
      image: "/placeholder.svg?height=600&width=400",
      href: "/products/2",
    },
    {
      id: 3,
      name: "Quần jean đen",
      price: 950000,
      image: "/placeholder.svg?height=600&width=400",
      href: "/products/3",
    },
    {
      id: 4,
      name: "Áo khoác da",
      price: 1850000,
      image: "/placeholder.svg?height=600&width=400",
      href: "/products/4",
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="bg-white">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="mt-2 font-medium">{formatPrice(product.price)}</p>
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
  )
}
