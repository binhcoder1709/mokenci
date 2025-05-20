import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OrdersPage() {
  // Giả lập dữ liệu đơn hàng
  const orders = [
    {
      id: "ORD123456",
      date: "20/05/2025",
      status: "Đang giao hàng",
      total: 1800000,
      items: [
        {
          id: 1,
          name: "Áo sơ mi đen",
          price: 850000,
          quantity: 1,
          image: "/placeholder.svg?height=600&width=400",
        },
        {
          id: 2,
          name: "Quần jean đen",
          price: 950000,
          quantity: 1,
          image: "/placeholder.svg?height=600&width=400",
        },
      ],
      tracking: {
        number: "VN123456789",
        carrier: "GHN Express",
        estimatedDelivery: "22/05/2025",
        updates: [
          {
            date: "20/05/2025",
            time: "10:30",
            status: "Đơn hàng đã được xác nhận",
          },
          {
            date: "20/05/2025",
            time: "14:45",
            status: "Đơn hàng đang được chuẩn bị",
          },
          {
            date: "21/05/2025",
            time: "08:15",
            status: "Đơn hàng đã được giao cho đơn vị vận chuyển",
          },
        ],
      },
    },
    {
      id: "ORD123455",
      date: "15/05/2025",
      status: "Đã giao hàng",
      total: 1250000,
      items: [
        {
          id: 3,
          name: "Áo khoác bomber",
          price: 1250000,
          quantity: 1,
          image: "/placeholder.svg?height=600&width=400",
        },
      ],
      tracking: {
        number: "VN123456788",
        carrier: "GHN Express",
        estimatedDelivery: "17/05/2025",
        updates: [
          {
            date: "15/05/2025",
            time: "09:30",
            status: "Đơn hàng đã được xác nhận",
          },
          {
            date: "15/05/2025",
            time: "13:45",
            status: "Đơn hàng đang được chuẩn bị",
          },
          {
            date: "16/05/2025",
            time: "08:15",
            status: "Đơn hàng đã được giao cho đơn vị vận chuyển",
          },
          {
            date: "17/05/2025",
            time: "10:30",
            status: "Đơn hàng đã được giao thành công",
          },
        ],
      },
    },
  ]

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
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Đơn hàng của tôi</h1>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="processing">Đang xử lý</TabsTrigger>
              <TabsTrigger value="shipping">Đang giao</TabsTrigger>
              <TabsTrigger value="completed">Đã giao</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h2 className="font-bold">Đơn hàng #{order.id}</h2>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Ngày đặt hàng: {order.date}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <Link href={`/orders/${order.id}`}>
                          <Button variant="outline" size="sm" className="text-sm">
                            Xem chi tiết
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex space-x-4">
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">{item.name}</h3>
                            <p className="text-xs text-gray-500">
                              {formatPrice(item.price)} x {item.quantity}
                            </p>
                          </div>
                          <div className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-600">
                        <Package className="h-4 w-4 mr-1" />
                        <span>
                          {order.tracking.carrier}: {order.tracking.number}
                        </span>
                      </div>
                      <div className="font-bold">Tổng cộng: {formatPrice(order.total)}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <h2 className="text-xl font-medium mb-4">Bạn chưa có đơn hàng nào</h2>
                  <p className="text-gray-500 mb-8">Hãy mua sắm để có đơn hàng đầu tiên</p>
                  <Link href="/products">
                    <Button>Mua sắm ngay</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="processing" className="space-y-6">
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-4">Không có đơn hàng đang xử lý</h2>
                <p className="text-gray-500 mb-8">Bạn không có đơn hàng nào đang được xử lý</p>
                <Link href="/products">
                  <Button>Mua sắm ngay</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="space-y-6">
              {orders
                .filter((order) => order.status === "Đang giao hàng")
                .map((order) => (
                  <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h2 className="font-bold">Đơn hàng #{order.id}</h2>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Ngày đặt hàng: {order.date}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <Link href={`/orders/${order.id}`}>
                          <Button variant="outline" size="sm" className="text-sm">
                            Xem chi tiết
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex space-x-4">
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">{item.name}</h3>
                            <p className="text-xs text-gray-500">
                              {formatPrice(item.price)} x {item.quantity}
                            </p>
                          </div>
                          <div className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-600">
                        <Package className="h-4 w-4 mr-1" />
                        <span>
                          {order.tracking.carrier}: {order.tracking.number}
                        </span>
                      </div>
                      <div className="font-bold">Tổng cộng: {formatPrice(order.total)}</div>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              {orders
                .filter((order) => order.status === "Đã giao hàng")
                .map((order) => (
                  <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h2 className="font-bold">Đơn hàng #{order.id}</h2>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Ngày đặt hàng: {order.date}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <Link href={`/orders/${order.id}`}>
                          <Button variant="outline" size="sm" className="text-sm">
                            Xem chi tiết
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex space-x-4">
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">{item.name}</h3>
                            <p className="text-xs text-gray-500">
                              {formatPrice(item.price)} x {item.quantity}
                            </p>
                          </div>
                          <div className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-600">
                        <Package className="h-4 w-4 mr-1" />
                        <span>
                          {order.tracking.carrier}: {order.tracking.number}
                        </span>
                      </div>
                      <div className="font-bold">Tổng cộng: {formatPrice(order.total)}</div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
