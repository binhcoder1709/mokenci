"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 500)
      setScrollOpacity(opacity)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://mikenco.vn/cdn/shop/files/20250514-135236.jpg?v=1747209582&width=3840" alt="Hero image" fill priority className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">MIKENCO</h1>
        <p className="text-lg md:text-xl max-w-md mx-auto mb-8">Thời trang nam cao cấp, thiết kế hiện đại và tinh tế</p>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors">
          Khám phá bộ sưu tập mới
        </Button>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        style={{ opacity: scrollOpacity }}
        onClick={scrollToContent}
      >
        <span className="text-white text-sm mb-2">CUỘN XUỐNG</span>
        <ChevronDown className="text-white animate-bounce h-6 w-6" />
      </div>
    </div>
  )
}
