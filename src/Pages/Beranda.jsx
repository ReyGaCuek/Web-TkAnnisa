import React from "react";
import ImageSlider from "../components/ImageSlider";
import { NavLink } from "react-router-dom";

const Beranda = () => {
  return (
    <div className="bg-purple-50/45 py-20 md:py-10">
      {/* Hero Section dengan Slider */}
      <section className="relative">
        <ImageSlider />

        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Selamat Datang di TK AN-NISA
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Membentuk generasi cerdas, kreatif, dan berakhlak mulia sejak dini
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NavLink
                to={"/pendaftaran"}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition"
              >
                Daftar Sekarang
              </NavLink>
              <NavLink
                to={"/galeri"}
                className="bg-white/10 hover:bg-white/20 border border-white text-white py-3 px-6 rounded-lg font-medium transition"
              >
                Galeri
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Info Pendaftaran */}
      <section id="pendaftaran" className="py-16 bg-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">
            Pendaftaran Murid Baru
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Tahun Ajaran 2023/2024 sudah dibuka! Daftarkan putra/putri Anda
            sekarang.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Persyaratan",
                items: [
                  "Usia 4-6 tahun",
                  "Fotokopi akta kelahiran",
                  "Fotokopi KK",
                  "Pas foto 3x4",
                ],
              },
              {
                title: "Waktu Pendaftaran",
                items: [
                  "Senin-Jumat",
                  "08.00 - 14.00 WIB",
                  "Gelombang I: 1-15 Juni",
                  "Gelombang II: 16-30 Juni",
                ],
              },
              {
                title: "Biaya Pendidikan",
                items: [
                  "Uang pangkal: Rp 2.000.000",
                  "SPP bulanan: Rp 500.000",
                  "Seragam: Rp 350.000",
                  "Diskon 10% pendaftaran gelombang I",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-purple-700 mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {item.items.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Button Daftar Sekarang */}
          <div className="mt-12">
            <NavLink
              to="/pendaftaran"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Daftar Sekarang
              <svg
                className="w-5 h-5 inline-block ml-2 -mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </NavLink>
            <p className="text-gray-600 mt-4">
              Atau hubungi kami di (+62) 896-8124-4813 untuk informasi lebih
              lanjut
            </p>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            Mengapa Memilih TK AN-NISA?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: "Kurikulum Berkualitas",
                description:
                  "Kurikulum terintegrasi yang menyenangkan dan sesuai perkembangan anak",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Guru Berpengalaman",
                description:
                  "Tenaga pendidik profesional dan penuh kasih sayang",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                ),
                title: "Fasilitas Lengkap",
                description:
                  "Lingkungan belajar yang aman, nyaman, dan menyenangkan",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-purple-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-purple-50 p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                Visi Sekolah
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Menjadi taman bermain dan belajar yang menyenangkan dan
                    terpercaya serta membentuk generasi islami sejak dini.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Membentuk anak yang cerdas, baik dan terampil berakhlak
                    mulia, sholeh/sholehah sehingga terwujud anak yang kreatif
                    dan mandiri.
                  </p>
                </div>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-purple-50 p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                Misi Sekolah
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <p className="text-gray-700">
                    Menyediakan pembelajaran aktif, kreatif, efektif dan
                    inovatif.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <p className="text-gray-700">
                    Mendidik anak secara optimal sesuai dengan kemampuan anak.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <p className="text-gray-700">
                    Menyiapkan anak didik ke jenjang pendidikan dasar dengan
                    ketercapaian kompetensi dasar sesuai tahapan perkembangan
                    anak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
