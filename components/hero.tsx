"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Users, Clock, Shield, Sparkles, TrendingUp, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const whatsappNumber = "6282281212152"
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                <Sparkles className="h-4 w-4 mr-2" />
                Terpercaya untuk Mahasiswa Bengkulu
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Tugas Kuliah{" "}
                <span className="text-blue-600 relative">
                  Kelar
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 -z-10 rounded"></div>
                </span>{" "}
                Bersama{" "}
                <span className="text-blue-600 relative">
                  Bro!
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 -z-10 rounded"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Solusi terpercaya untuk semua kebutuhan tugas kuliah mahasiswa Bengkulu. Dikerjakan oleh ahli
                berpengalaman dengan <span className="font-semibold text-blue-600">kualitas terjamin</span> dan{" "}
                <span className="font-semibold text-blue-600">tepat waktu</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20pesan%20jasa%20untuk%20tugas%20kuliah`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  <TrendingUp className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Pesan Sekarang
                </Button>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20gratis%20tentang%20layanan%20kalian`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent hover:scale-105"
                >
                  Konsultasi Gratis
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full hover:scale-105 transition-transform cursor-default">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">100% Aman</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full hover:scale-105 transition-transform cursor-default">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Garansi Revisi</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-50 px-3 py-2 rounded-full hover:scale-105 transition-transform cursor-default">
                <Clock className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">Tepat Waktu</span>
              </div>
            </div>

            {/* Stats - with staggered animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: <Users className="h-7 w-7 text-blue-600" />, value: "500+", label: "Mahasiswa Puas" },
                { icon: <CheckCircle className="h-7 w-7 text-blue-600" />, value: "98%", label: "Tingkat Sukses" },
                { icon: <Clock className="h-7 w-7 text-blue-600" />, value: "24/7", label: "Support" },
                { icon: <Star className="h-7 w-7 text-blue-600" />, value: "4.9", label: "Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* Main Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative z-10 hover:shadow-3xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white mb-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-blue-200 mr-3" />
                  <h3 className="text-2xl font-bold">Mengapa Pilih KelarBro?</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Dikerjakan oleh ahli berpengalaman",
                    "Garansi revisi hingga puas",
                    "Pengerjaan tepat waktu",
                    "Harga terjangkau untuk mahasiswa",
                    "Kerahasiaan data terjamin",
                    "Melayani seluruh universitas di Bengkulu",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements with animations */}
            <div
              className={`absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            >
              <span className="animate-pulse">Terpercaya</span>
            </div>
            <div
              className={`absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            >
              Garansi 100%
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
