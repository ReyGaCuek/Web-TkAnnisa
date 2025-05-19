import React from "react";
import { useState } from "react";
import {
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Album = () => {
  const albums = [
    {
      id: 1,
      title: "Kegiatan Belajar",
      cover: "/albums/learning.jpg", // Ganti dengan path gambar Anda
      count: 24,
      date: "15 Maret 2023",
    },
    {
      id: 2,
      title: "Field Trip",
      cover: "/albums/fieldtrip.jpg", // Ganti dengan path gambar Anda
      count: 32,
      date: "2 April 2023",
    },
    {
      id: 3,
      title: "Pentas Seni",
      cover: "/albums/performance.jpg", // Ganti dengan path gambar Anda
      count: 45,
      date: "17 Mei 2023",
    },
    {
      id: 4,
      title: "Hari Kemerdekaan",
      cover: "/albums/independence.jpg", // Ganti dengan path gambar Anda
      count: 28,
      date: "17 Agustus 2023",
    },
    {
      id: 5,
      title: "Kegiatan Outdoor",
      cover: "/albums/outdoor.jpg", // Ganti dengan path gambar Anda
      count: 18,
      date: "10 September 2023",
    },
    {
      id: 6,
      title: "Peringatan Hari Anak",
      cover: "/albums/children-day.jpg", // Ganti dengan path gambar Anda
      count: 36,
      date: "23 Juli 2023",
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Data foto untuk lightbox (contoh)
  const allPhotos = [
    { id: 1, src: "/photos/photo1.jpg", album: "Kegiatan Belajar" },
    { id: 2, src: "/photos/photo2.jpg", album: "Kegiatan Belajar" },
    { id: 3, src: "/photos/photo3.jpg", album: "Field Trip" },
    // Tambahkan lebih banyak foto sesuai kebutuhan
  ];

  // Fungsi untuk membuka lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Fungsi untuk menutup lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigasi foto di lightbox
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? allPhotos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === allPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-21 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Galeri Kegiatan TK An-Nisa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dokumentasi momen-momen seru dan berharga di TK kami
          </p>
        </div>

        {/* Search Bar */}
        {/* <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari album atau foto..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div> */}

        {/* Grid Album */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      {album.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {album.count} foto • {album.date}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                  onClick={() => openLightbox(0)} // Contoh, bisa disesuaikan
                >
                  Lihat Album
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-blue-300 transition"
            >
              <FaTimes />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white text-2xl hover:text-blue-300 transition md:left-10"
            >
              <FaChevronLeft size={32} />
            </button>

            <div className="max-w-4xl w-full">
              <img
                src={allPhotos[currentImageIndex].src}
                alt={`Foto ${currentImageIndex + 1}`}
                className="max-h-[80vh] w-full object-contain"
              />
              <div className="text-white text-center mt-2">
                {currentImageIndex + 1} / {allPhotos.length} •{" "}
                {allPhotos[currentImageIndex].album}
              </div>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 text-white text-2xl hover:text-blue-300 transition md:right-10"
            >
              <FaChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Album;
