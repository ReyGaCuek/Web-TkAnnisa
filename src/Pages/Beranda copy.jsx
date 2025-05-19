import React from "react";
import ImageSlider from "../components/ImageSlider";
// import { NavLink } from "react-router-dom";

const Beranda = () => {
  // const navigate = useNavigate();
  return (
    <section
      id="home"
      className="min-h-screen block py-15 bg-black/50 justify-center relative"
    >
      <ImageSlider />

      <div className="text-center z-10 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-purple-800">
          Selamat Datang di TK AN-NISA
        </h1>

        <p className="text-black text-lg mb-8  mx-auto">
          I'm a full-stack developer. <br />
          JavaScript and I are in a love-hate relationship (mostly love... when
          it works). <br />
          When I'm not debugging mysterious errors, I'm usually creating them.{" "}
          <br /> Coffee is my main dependency, Git is my therapist, and Stack
          Overflow is my second home.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6
          rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4) hover:bg-blue-500/10 "
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* sec2 */}
      <div className="min-h-96 flex items-center justify-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Kenapa Memilih Pendaftaran Kami?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
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
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Kurikulum Berkualitas
              </h3>
              <p className="text-gray-600 text-center">
                Kurikulum terbaik untuk mempersiapkan anak memasuki jenjang
                pendidikan dasar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
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
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Pengajar Berpengalaman
              </h3>
              <p className="text-gray-600 text-center">
                Didukung oleh tenaga pendidik yang profesional dan berpengalaman
                di bidangnya.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
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
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Fasilitas Lengkap
              </h3>
              <p className="text-gray-600 text-center">
                Fasilitas lengkap dan nyaman untuk mendukung kegiatan belajar
                mengajar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
