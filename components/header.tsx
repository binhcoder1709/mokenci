"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col gap-6 mt-10">
              <Link href="/" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Trang chủ
              </Link>
              <Link href="/collections" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Bộ sưu tập
              </Link>
              <Link href="/products" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Sản phẩm
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Về chúng tôi
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Liên hệ
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/collections" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Bộ sưu tập
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Sản phẩm
          </Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-xl font-bold tracking-wider">MIKENCO</h1>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
              <div className="w-full max-w-md relative">
                <Input type="search" placeholder="Tìm kiếm..." className="w-full pr-10" autoFocus />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Tìm kiếm</span>
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Tài khoản</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Giỏ hàng</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
