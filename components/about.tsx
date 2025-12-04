"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Shield, Clock, Users, Target, Heart, Zap, CheckCircle, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
  const whatsappNumber = "6282281212152"
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Tim Ahli Berpengalaman",
      description:
        "Dikerjakan oleh lulusan terbaik dari berbagai universitas ternama dengan pengalaman bertahun-tahun.",
      stats: "50+ Ahli",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Keamanan & Privasi",
      description: "Data dan informasi Anda dijamin aman dengan sistem keamanan berlapis dan kebijakan privasi ketat.",
      stats: "100% Aman",
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Tepat Waktu",
      description: "Komitmen tinggi untuk menyelesaikan tugas sesuai deadline yang telah disepakati bersama.",
      stats: "98% On-Time",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Support 24/7",
      description: "Tim customer service siap membantu Anda kapan saja melalui berbagai channel komunikasi.",
      stats: "24/7 Online",
    },
  ]

  const achievements = [
    { number: "500+", label: "Mahasiswa Dilayani", icon: <Users className="h-6 w-6" /> },
    { number: "1000+", label: "Tugas Diselesaikan", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "6", label: "Universitas Partner", icon: <Award className="h-6 w-6" /> },
    { number: "4.9/5", label: "Rating Kepuasan", icon: <Heart className="h-6 w-6" /> },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Tentang Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa KelarBro?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KelarBro adalah platform terpercaya yang menghubungkan mahasiswa dengan para ahli untuk menyelesaikan
            berbagai tugas kuliah dengan kualitas terbaik.
          </p>
        </div>

        {/* Achievement Stats with animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`text-center border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features with animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`text-center border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  <Zap className="h-3 w-3 mr-1" />
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Target className="h-4 w-4 mr-2" />
                Misi Kami
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Membantu Mahasiswa Mencapai Prestasi Terbaik
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Membantu mahasiswa Indonesia mencapai prestasi akademik terbaik dengan menyediakan layanan bantuan tugas
                yang berkualitas, terpercaya, dan terjangkau.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Kami percaya bahwa setiap mahasiswa berhak mendapatkan dukungan akademik yang mereka butuhkan untuk
                sukses dalam perjalanan pendidikan mereka.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20layanan%20kalian`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Pelajari Lebih Lanjut
                </Button>
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-blue-200 mr-3" />
                  <h4 className="text-2xl font-bold">Komitmen Kami</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Kualitas hasil kerja terbaik dengan standar akademik tinggi",
                    "Pelayanan yang ramah, profesional, dan responsif 24/7",
                    "Harga yang fair, transparan, dan terjangkau untuk mahasiswa",
                    "Kepuasan pelanggan adalah prioritas utama kami",
                    "Kerahasiaan data dan privasi terjamin 100%",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-start space-x-3 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${700 + index * 100}ms` }}
                    >
                      <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Floating Badge */}
            <div
              className={`absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            >
              Terpercaya
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
