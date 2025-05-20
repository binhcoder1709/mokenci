import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Package, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  // Giả lập dữ liệu đơn hàng
  const order = {
    id: params.id,
    date: "20/05/2025",
    status: "Đang giao hàng",
    total: 1800000,
    subtotal: 1770000,
    shipping: 30000,
    items: [
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
    ],
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
      updates: [
        {
          date: "20/05/2025",
          time: "10:30",
          status: "Đơn hàng đã được xác nhận",
          description: "Đơn hàng của bạn đã được xác nhận và đang được xử lý",
        },
        {
          date: "20/05/2025",
          time: "14:45",
          status: "Đơn hàng đang được chuẩn bị",
          description: "Chúng tôi đang chuẩn bị các sản phẩm trong đơn hàng của bạn",
        },
        {
          date: "21/05/2025",
          time: "08:15",
          status: "Đơn hàng đã được giao cho đơn vị vận chuyển",
          description: "Đơn hàng của bạn đã được giao cho đơn vị vận chuyển GHN Express",
        },
      ],
    },
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đang xử lý":
        return "bg-blue-100 text-blue-800"
      case "Đang giao hàng":
        return "bg-yellow-100 text-yellow-800"
      case "Đã giao hàng":
        return "bg-green-100 text-green-800"
      case "Đã hủy":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link
              href="/orders"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Quay lại đơn hàng của tôi
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">Chi tiết đơn hàng #{order.id}</h1>
                <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
              </div>
              <p className="text-gray-500 mt-1">Ngày đặt hàng: {order.date}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <Button variant="outline" size="sm">
                Liên hệ hỗ trợ
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Order Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Sản phẩm</h2>

                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex space-x-4">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="text-sm text-gray-500 mt-1">
                          <p>Kích thước: {item.size}</p>
                          <p>Màu sắc: {item.color}</p>
                          <p>
                            {formatPrice(item.price)} x {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="font-medium">{formatPrice(item.price * item.quantity)}</div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tạm tính</span>
                    <span>{formatPrice(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phí vận chuyển</span>
                    <span>{formatPrice(order.shipping)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold text-base">
                    <span>Tổng cộng</span>
                    <span>{formatPrice(order.total)}</span>
                  </div>
                </div>
              </div>

              {/* Tracking Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Thông tin vận chuyển</h2>
                  <Badge variant="outline" className="flex items-center">
                    <Truck className="h-3 w-3 mr-1" />
                    Dự kiến giao: {order.tracking.estimatedDelivery}
                  </Badge>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                  <Package className="h-4 w-4" />
                  <span>
                    {order.tracking.carrier}: {order.tracking.number}
                  </span>
                </div>

                <div className="relative">
                  {order.tracking.updates.map((update, index) => (
                    <div key={index} className="mb-8 relative">
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="rounded-full h-4 w-4 bg-black flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                          {index < order.tracking.updates.length - 1 && (
                            <div className="h-full w-0.5 bg-gray-200 mt-1"></div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{update.status}</h3>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {update.date} - {update.time}
                          </p>
                          <p className="text-sm mt-1">{update.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Thông tin đơn hàng</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Mã đơn hàng</h3>
                    <p>{order.id}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Ngày đặt hàng</h3>
                    <p>{order.date}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Trạng thái</h3>
                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phương thức thanh toán</h3>
                    <p>{order.payment_method}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Địa chỉ giao hàng</h2>

                <div className="space-y-1">
                  <p className="font-medium">{order.shipping_address.name}</p>
                  <p>{order.shipping_address.address}</p>
                  <p>
                    {order.shipping_address.city}, {order.shipping_address.province}
                  </p>
                  <p>Số điện thoại: {order.shipping_address.phone}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Cần hỗ trợ?</h2>

                <div className="space-y-4">
                  <p className="text-sm">Nếu bạn có bất kỳ câu hỏi nào về đơn hàng, vui lòng liên hệ với chúng tôi.</p>
                  <Button className="w-full">Liên hệ hỗ trợ</Button>
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
