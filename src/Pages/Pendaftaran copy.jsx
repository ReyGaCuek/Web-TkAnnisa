import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";

const Pendaftaran = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Formulir Pendaftaran",
      description: "Isi formulir pendaftaran online melalui website kami atau datang langsung ke sekolah",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Berkas Dokumen",
      description: "Siapkan fotokopi akta kelahiran, KK, pas foto 3x4, dan surat keterangan sehat",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Wawancara",
      description: "Orang tua dan calon siswa akan diwawancara oleh pihak sekolah",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Pengumuman",
      description: "Hasil seleksi akan diumumkan melalui website dan SMS dalam 3 hari kerja",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Daftar Ulang",
      description: "Melakukan pembayaran dan melengkapi administrasi pendaftaran",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];
  
  return (
    // <section className="min-h-96 text-center py-30">
    //   <div className="flex items-center justify-center relative">
    //     <div className="container mx-auto px-4">
    //       <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
    //         Prosedur Pendaftaran TK An-Nisa
    //       </h2>
    //       <div className="grid gap-8">
    //         <div className="bg-white p-6 rounded-lg shadow-md">
    //           <div className="text-blue-600 mb-4">
    //             <svg
    //               className="w-10 h-10 mx-auto"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    //               ></path>
    //             </svg>
    //           </div>
    //           <h3 className="text-xl font-semibold text-center mb-3 text-black">
    //             Kurikulum Berkualitas
    //           </h3>
    //           <p className="text-gray-600 text-center">
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
    //             omnis facilis dolor consectetur placeat quaerat dicta in ipsum?
    //             Temporibus laboriosam doloribus cupiditate reprehenderit tempora
    //             repellendus quas ea reiciendis non, sit explicabo vel pariatur
    //             eligendi unde deleniti nemo voluptatibus suscipit error vitae
    //             doloremque ut dolor. Deleniti adipisci commodi sit repellat
    //             exercitationem, animi itaque ab cum assumenda voluptas placeat
    //             qui illo porro tenetur inventore. Aliquam soluta laudantium sed
    //             animi aut nostrum praesentium amet laboriosam quibusdam quidem
    //             adipisci optio nihil quo ipsum hic consectetur odit alias, ab
    //             commodi sit voluptatum ea? Cum quam rerum odio impedit
    //             distinctio optio accusamus officiis veniam laboriosam.
    //             Voluptatibus quam vitae eos alias officiis qui similique. Sed,
    //             libero minima? Voluptates rerum fugit dolores, sunt soluta,
    //             consequuntur pariatur reiciendis possimus, obcaecati dicta
    //             dolorum quas. Omnis voluptatum molestias dolorem, debitis
    //             ratione aliquid saepe. Obcaecati quis soluta numquam aliquid nam
    //             aperiam natus fuga aspernatur voluptate nostrum eum animi quod
    //             a, libero corporis deserunt asperiores atque. A dolorem
    //             temporibus voluptate ipsam ea! Rem quibusdam minus adipisci
    //             voluptatem labore sed saepe ad ipsam, officia praesentium
    //             exercitationem similique accusantium distinctio dolore optio
    //             temporibus amet perferendis, aspernatur illo provident
    //             consequuntur totam! Reiciendis ratione nam dolorem labore earum
    //             quod ullam ducimus, illo impedit? Dolor mollitia qui cupiditate?
    //           </p>
    //         </div>

    //         {/* <div className="bg-white p-6 rounded-lg shadow-md">
    //           <div className="text-blue-600 mb-4">
    //             <svg
    //               className="w-10 h-10 mx-auto"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    //               ></path>
    //             </svg>
    //           </div>
    //           <h3 className="text-xl font-semibold text-center mb-3">
    //             Pengajar Berpengalaman
    //           </h3>
    //           <p className="text-gray-600 text-center">
    //             Didukung oleh tenaga pendidik yang profesional dan berpengalaman
    //             di bidangnya.
    //           </p>
    //         </div>

    //         <div className="bg-white p-6 rounded-lg shadow-md">
    //           <div className="text-blue-600 mb-4">
    //             <svg
    //               className="w-10 h-10 mx-auto"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    //               ></path>
    //             </svg>
    //           </div>
    //           <h3 className="text-xl font-semibold text-center mb-3">
    //             Fasilitas Lengkap
    //           </h3>
    //           <p className="text-gray-600 text-center">
    //             Fasilitas lengkap dan nyaman untuk mendukung kegiatan belajar
    //             mengajar.
    //           </p>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="min-h-screen py-30 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Prosedur Pendaftaran TK An-Nisa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti langkah-langkah berikut untuk mendaftarkan putra/putri Anda di TK An-Nisa
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative z-10">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === step.id ? 'bg-blue-600 text-white scale-110 shadow-lg' : 'bg-white text-blue-600 border-2 border-blue-400'}`}
                >
                  {step.icon}
                </button>
                <span className={`mt-2 font-medium ${activeStep === step.id ? 'text-blue-700' : 'text-gray-600'}`}>
                  {step.title}
                </span>
              </div>
            ))}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 -z-1"></div>
            <div 
              className="absolute top-8 left-0 h-1 bg-blue-500 -z-1 transition-all duration-500" 
              style={{ width: `${(activeStep - 1) * 25}%` }}
            ></div>
          </div>

          {/* Mobile steps */}
          <div className="md:hidden mb-8">
            <select 
              onChange={(e) => setActiveStep(parseInt(e.target.value))}
              className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={activeStep}
            >
              {steps.map(step => (
                <option key={step.id} value={step.id}>
                  Langkah {step.id}: {step.title}
                </option>
              ))}
            </select>
          </div>

          {/* Step content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-700 p-8 flex flex-col items-center justify-center text-white">
                <div className="text-6xl font-bold mb-2">{activeStep}</div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  {steps.find(step => step.id === activeStep)?.title}
                </h3>
                <div className="text-blue-100">
                  {steps.find(step => step.id === activeStep)?.icon}
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-lg text-gray-700 mb-6">
                  {steps.find(step => step.id === activeStep)?.description}
                </p>
                
                {activeStep === 1 && (
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Mulai Pendaftaran Online
                  </button>
                )}
                
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
                    disabled={activeStep === 1}
                    className={`px-4 py-2 rounded-lg ${activeStep === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    Sebelumnya
                  </button>
                  <button 
                    onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length))}
                    disabled={activeStep === steps.length}
                    className={`px-4 py-2 rounded-lg ${activeStep === steps.length ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Informasi Tambahan</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Pendaftaran dibuka setiap hari Senin-Jumat pukul 08.00-14.00 WIB</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Biaya pendaftaran sebesar Rp 150.000 (tidak termasuk seragam dan buku)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Kuota terbatas untuk 30 siswa per tahun ajaran</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pendaftaran;
