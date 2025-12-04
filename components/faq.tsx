"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

  const faqs = [
    {
      question: "Bagaimana cara memesan layanan KelarBro?",
      answer:
        "Anda bisa memesan melalui website kami dengan mengisi form pemesanan, atau menghubungi customer service melalui WhatsApp. Tim kami akan merespons dalam waktu maksimal 1 jam.",
    },
    {
      question: "Berapa lama waktu pengerjaan tugas?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas tugas dan paket yang dipilih. Untuk tugas standar, biasanya 2-5 hari kerja. Kami juga melayani pengerjaan express untuk deadline mendesak.",
    },
    {
      question: "Apakah ada garansi revisi?",
      answer:
        "Ya, kami memberikan garansi revisi sesuai paket yang dipilih. Paket Basic mendapat 1x revisi, Standard 3x revisi, dan Premium unlimited revisi hingga Anda puas dengan hasilnya.",
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer:
        "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan virtual account. Pembayaran bisa dilakukan 50% di awal dan 50% setelah tugas selesai. Khusus untuk daerah sekitar Kota Bengkulu, kami juga melayani COD (Cash on Delivery) untuk kemudahan Anda.",
    },
    {
      question: "Apakah data saya aman?",
      answer:
        "Keamanan dan privasi data Anda adalah prioritas utama kami. Semua informasi dijaga kerahasiaan dan tidak akan dibagikan kepada pihak ketiga. Kami juga menerapkan sistem keamanan berlapis.",
    },
    {
      question: "Apa saja mata kuliah yang bisa dibantu?",
      answer:
        "Kami melayani hampir semua mata kuliah dari berbagai jurusan seperti Ekonomi, Hukum, Teknik, Kedokteran, Psikologi, Sastra, dan lainnya. Tim kami terdiri dari ahli di berbagai bidang.",
    },
    {
      question: "Bagaimana jika hasil tidak sesuai ekspektasi?",
      answer:
        "Jika hasil tidak sesuai ekspektasi, Anda bisa mengajukan revisi sesuai kuota paket. Jika masih tidak puas, kami akan mengembalikan 100% uang Anda sesuai kebijakan garansi kami.",
    },
    {
      question: "Apakah bisa konsultasi dulu sebelum order?",
      answer:
        "Tentu saja! Kami menyediakan konsultasi gratis untuk membahas kebutuhan tugas Anda. Tim kami akan memberikan estimasi waktu, harga, dan saran terbaik untuk tugas Anda.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan KelarBro. Jika masih ada yang ingin ditanyakan, jangan
            ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`border transition-all duration-500 ${
                openIndex === index ? "shadow-md border-blue-200" : "hover:border-gray-300"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA with animation */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Masih Ada Pertanyaan?</h3>
            <p className="text-gray-600 mb-6">
              Tim customer service kami siap membantu Anda 24/7 melalui berbagai channel komunikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ada%20pertanyaan%20tentang%20layanan%20kalian`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                WhatsApp
              </a>
              <a
                href="mailto:kelarbro01@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
