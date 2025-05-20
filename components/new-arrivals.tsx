import Image from "next/image"
import Link from "next/link"

export function NewArrivals() {
  const newArrivals = [
    {
      id: 1,
      name: "Áo sơ mi lụa",
      price: 1250000,
      image: "/placeholder.svg?height=600&width=400",
      href: "/products/5",
    },
    {
      id: 2,
      name: "Quần âu đen",
      price: 950000,
      image: "/placeholder.svg?height=600&width=400",
      href: "/products/6",
    },
    {
      id: 3,
      name: "Áo khoác bomber",
      price: 1850000,
      image: "/placeholder.svg?height=600&width=400",
      href: "/products/7",
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Hàng mới về</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="mt-2 font-medium">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
