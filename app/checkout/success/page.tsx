import Link from "next/link"
import { CheckCircle, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CheckoutSuccessPage() {
  // Giả lập dữ liệu đơn hàng
  const order = {
    id: "ORD123456",
    date: "20/05/2025",
    total: 1800000,
    email: "nguyenvana@example.com",
    shipping_address: {
      name: "Nguyễn Văn A",
      address: "123 Đường Nguyễn Huệ",
      city: "Quận 1",
      province: "TP. Hồ Chí Minh",
      phone: "0123456789",
    },
    payment_method: "Thanh toán khi nhận hàng (COD)",
    tracking: {
      number: "VN123456789",
      carrier: "GHN Express",
      estimatedDelivery: "22/05/2025",
    },
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price)
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">Đặt hàng thành công!</h1>
              <p className="text-gray-600 mt-2">
                Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đã được xác nhận và đang được xử lý.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Mã đơn hàng</p>
                  <p className="font-medium">{order.id}</p>
                </div>
                <Link href={`/orders/${order.id}`}>
                  <Button variant="outline" size="sm">
                    Xem chi tiết đơn hàng
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold mb-2">Thông tin đơn hàng</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Ngày đặt hàng</p>
                    <p>{order.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tổng cộng</p>
                    <p className="font-medium">{formatPrice(order.total)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p>{order.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phương thức thanh toán</p>
                    <p>{order.payment_method}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-bold mb-2">Thông tin vận chuyển</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Địa chỉ giao hàng</p>
                    <p className="font-medium">{order.shipping_address.name}</p>
                    <p>{order.shipping_address.address}</p>
                    <p>
                      {order.shipping_address.city}, {order.shipping_address.province}
                    </p>
                    <p>Số điện thoại: {order.shipping_address.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Thông tin vận chuyển</p>
                    <div className="flex items-center mt-1">
                      <Package className="h-4 w-4 mr-1 text-gray-500" />
                      <span>
                        {order.tracking.carrier}: {order.tracking.number}
                      </span>
                    </div>
                    <p className="mt-1">Dự kiến giao hàng: {order.tracking.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="text-center space-y-4">
                <p>Chúng tôi sẽ gửi email xác nhận đơn hàng và thông tin vận chuyển đến email của bạn.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/orders">
                    <Button variant="outline">Xem đơn hàng của tôi</Button>
                  </Link>
                  <Link href="/products">
                    <Button>Tiếp tục mua sắm</Button>
                  </Link>
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
