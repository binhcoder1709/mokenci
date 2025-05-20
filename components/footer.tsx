import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MIKENCO</h3>
            <p className="text-gray-400 mb-4">Thời trang nam cao cấp, thiết kế hiện đại và tinh tế</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Thông tin</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Liên hệ</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">+84 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">info@mikenco.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Đăng ký nhận tin</h4>
            <p className="text-gray-400 mb-4">Đăng ký để nhận thông tin về sản phẩm mới và khuyến mãi</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Email của bạn" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full">Đăng ký</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MIKENCO. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
