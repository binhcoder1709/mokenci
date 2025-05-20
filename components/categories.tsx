import Link from "next/link"
import Image from "next/image"

export function Categories() {
  const categories = [
    { name: "Áo", image: "/placeholder.svg?height=600&width=400", href: "/categories/shirts" },
    { name: "Quần", image: "/placeholder.svg?height=600&width=400", href: "/categories/pants" },
    { name: "Phụ kiện", image: "/placeholder.svg?height=600&width=400", href: "/categories/accessories" },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Danh mục sản phẩm</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-medium">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
