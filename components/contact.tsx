"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Send, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const whatsappNumber = "6282281212152"
  const whatsappDisplay = "+62 822-8121-2152"
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

  return (
    <section id="contact" className="py-20 bg-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageCircle className="h-4 w-4 mr-2" />
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Siap Membantu Anda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu menyelesaikan tugas kuliah Anda? Hubungi kami sekarang untuk konsultasi gratis dan dapatkan
            penawaran terbaik.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid with animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Phone className="h-8 w-8 text-white" />,
                iconBg: "bg-green-500",
                title: "WhatsApp",
                value: whatsappDisplay,
                href: `https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20tentang%20layanan%20kalian`,
                buttonText: "Chat Sekarang",
                buttonIcon: <Send className="h-4 w-4 mr-2" />,
                buttonClass: "bg-green-600 hover:bg-green-700 text-white",
              },
              {
                icon: <Mail className="h-8 w-8 text-white" />,
                iconBg: "bg-blue-600",
                title: "Email",
                value: "kelarbro01@gmail.com",
                href: "mailto:kelarbro01@gmail.com",
                buttonText: "Kirim Email",
                buttonIcon: <ExternalLink className="h-4 w-4 mr-2" />,
                buttonClass: "border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent",
                isOutline: true,
              },
              {
                icon: <Instagram className="h-8 w-8 text-white" />,
                iconBg: "bg-gradient-to-br from-pink-500 to-purple-600",
                title: "Instagram",
                value: "@kelarbro_",
                href: "https://instagram.com/kelarbro_",
                buttonText: "Follow Instagram",
                buttonIcon: <ExternalLink className="h-4 w-4 mr-2" />,
                buttonClass: "border-pink-500 text-pink-500 hover:bg-pink-50 bg-transparent",
                isOutline: true,
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`${contact.iconBg} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-4">{contact.value}</p>
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant={contact.isOutline ? "outline" : "default"}
                      className={`${contact.buttonClass} w-full`}
                    >
                      {contact.buttonIcon}
                      {contact.buttonText}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info with animation */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: <MapPin className="h-6 w-6 text-white" />, title: "Lokasi", value: "Kota Bengkulu, Indonesia" },
              {
                icon: <Clock className="h-6 w-6 text-white" />,
                title: "Jam Operasional",
                value: "24/7 Online Support",
              },
            ].map((info, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Contact CTA with animation */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Segera?</h3>
            <p className="text-blue-100 mb-6">
              Hubungi kami langsung melalui WhatsApp untuk respon yang lebih cepat dan konsultasi gratis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20butuh%20bantuan%20untuk%20tugas%20kuliah`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Phone className="h-5 w-5 mr-2" />
                  Chat WhatsApp Sekarang
                </Button>
              </a>
              <a href="https://instagram.com/kelarbro_" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 text-lg w-full sm:w-auto backdrop-blur-sm border border-white/30 hover:scale-105 transition-all">
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
