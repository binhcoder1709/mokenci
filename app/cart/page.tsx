import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CartPage() {
  // Giả lập dữ liệu giỏ hàng
  const cartItems = [
    {
      id: 1,
      name: "Áo sơ mi đen",
      price: 850000,
      quantity: 1,
      size: "L",
      color: "Đen",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 2,
      name: "Quần jean đen",
      price: 950000,
      quantity: 1,
      size: "M",
      color: "Đen",
      image: "/placeholder.svg?height=600&width=400",
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price)
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 30000
  const total = subtotal + shipping

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Giỏ hàng của bạn</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="hidden md:grid grid-cols-12 gap-4 pb-4 text-sm font-medium text-gray-500">
                    <div className="col-span-6">Sản phẩm</div>
                    <div className="col-span-2 text-center">Giá</div>
                    <div className="col-span-2 text-center">Số lượng</div>
                    <div className="col-span-2 text-right">Tổng</div>
                  </div>

                  <Separator className="hidden md:block" />

                  {cartItems.map((item, index) => (
                    <div key={item.id} className="py-6">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        {/* Product */}
                        <div className="col-span-1 md:col-span-6">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-20 h-20 flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <div className="text-sm text-gray-500 mt-1">
                                <p>Kích thước: {item.size}</p>
                                <p>Màu sắc: {item.color}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0 h-auto mt-2 md:hidden"
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                <span className="text-xs">Xóa</span>
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-1 md:col-span-2 md:text-center">
                          <div className="flex justify-between md:block">
                            <span className="md:hidden text-gray-500">Giá:</span>
                            <span>{formatPrice(item.price)}</span>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-1 md:col-span-2 md:text-center">
                          <div className="flex justify-between items-center md:justify-center">
                            <span className="md:hidden text-gray-500">Số lượng:</span>
                            <div className="flex items-center border rounded">
                              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Total */}
                        <div className="col-span-1 md:col-span-2 md:text-right">
                          <div className="flex justify-between md:block">
                            <span className="md:hidden text-gray-500">Tổng:</span>
                            <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        </div>

                        {/* Remove - Desktop */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hidden md:flex absolute right-0 text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Xóa</span>
                        </Button>
                      </div>

                      {index < cartItems.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}

                  <div className="flex justify-between items-center pt-4">
                    <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                      ← Tiếp tục mua sắm
                    </Link>
                    <Button variant="outline" className="text-sm">
                      Cập nhật giỏ hàng
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                  <h2 className="text-lg font-bold mb-4">Tóm tắt đơn hàng</h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tạm tính</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phí vận chuyển</span>
                      <span>{formatPrice(shipping)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-base">
                      <span>Tổng cộng</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6">Tiến hành thanh toán</Button>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Mã giảm giá</h3>
                    <div className="flex space-x-2">
                      <Input placeholder="Nhập mã giảm giá" className="text-sm" />
                      <Button variant="outline" className="shrink-0">
                        Áp dụng
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-4">Giỏ hàng của bạn đang trống</h2>
              <p className="text-gray-500 mb-8">Hãy thêm sản phẩm vào giỏ hàng để tiến hành thanh toán</p>
              <Link href="/products">
                <Button>Tiếp tục mua sắm</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
