import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CheckoutPage() {
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
      <main className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-sm mb-8">
            <Link href="/cart" className="text-gray-500 hover:text-gray-900">
              Giỏ hàng
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="font-medium">Thanh toán</span>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-500">Hoàn tất</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-7 space-y-6">
              {/* Shipping Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Thông tin giao hàng</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="firstName">Họ</Label>
                    <Input id="firstName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Tên</Label>
                    <Input id="lastName" className="mt-1" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Địa chỉ</Label>
                    <Input id="address" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="city">Thành phố</Label>
                    <Input id="city" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="district">Quận/Huyện</Label>
                    <Input id="district" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="ward">Phường/Xã</Label>
                    <Input id="ward" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="province">Tỉnh/Thành phố</Label>
                    <Select>
                      <SelectTrigger id="province">
                        <SelectValue placeholder="Chọn tỉnh/thành phố" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                        <SelectItem value="hn">Hà Nội</SelectItem>
                        <SelectItem value="dn">Đà Nẵng</SelectItem>
                        <SelectItem value="other">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="note">Ghi chú</Label>
                    <Textarea id="note" placeholder="Ghi chú về đơn hàng" className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Phương thức vận chuyển</h2>

                <RadioGroup defaultValue="standard">
                  <div className="flex items-start space-x-3 p-3 border rounded-md mb-3">
                    <RadioGroupItem value="standard" id="standard" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="standard" className="font-medium">
                        Giao hàng tiêu chuẩn
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">Nhận hàng trong 3-5 ngày làm việc</p>
                    </div>
                    <div className="font-medium">{formatPrice(30000)}</div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 border rounded-md">
                    <RadioGroupItem value="express" id="express" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="express" className="font-medium">
                        Giao hàng nhanh
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">Nhận hàng trong 1-2 ngày làm việc</p>
                    </div>
                    <div className="font-medium">{formatPrice(60000)}</div>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Phương thức thanh toán</h2>

                <RadioGroup defaultValue="cod">
                  <div className="flex items-start space-x-3 p-3 border rounded-md mb-3">
                    <RadioGroupItem value="cod" id="cod" className="mt-1" />
                    <div>
                      <Label htmlFor="cod" className="font-medium">
                        Thanh toán khi nhận hàng (COD)
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">Thanh toán bằng tiền mặt khi nhận hàng</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 border rounded-md mb-3">
                    <RadioGroupItem value="bank" id="bank" className="mt-1" />
                    <div>
                      <Label htmlFor="bank" className="font-medium">
                        Chuyển khoản ngân hàng
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">Chuyển khoản đến tài khoản ngân hàng của chúng tôi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 border rounded-md">
                    <RadioGroupItem value="card" id="card" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="card" className="font-medium">
                        Thẻ tín dụng/Ghi nợ
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">Thanh toán an toàn với cổng thanh toán</p>
                      <div className="flex space-x-2 mt-2">
                        <CreditCard className="h-6 w-6 text-gray-400" />
                        <CreditCard className="h-6 w-6 text-gray-400" />
                        <CreditCard className="h-6 w-6 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-lg font-bold mb-4">Đơn hàng của bạn</h2>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex space-x-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                        <div className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-xs text-gray-500">
                          {item.size} / {item.color}
                        </p>
                      </div>
                      <div className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

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

                <div className="mt-6 space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <div className="text-sm">
                      <Label htmlFor="terms">
                        Tôi đã đọc và đồng ý với{" "}
                        <Link href="/terms" className="text-black underline">
                          điều khoản và điều kiện
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <Button className="w-full">Đặt hàng</Button>

                  <p className="text-xs text-gray-500 text-center">
                    Bằng cách nhấn nút Đặt hàng, bạn đồng ý với các điều khoản và điều kiện của chúng tôi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
