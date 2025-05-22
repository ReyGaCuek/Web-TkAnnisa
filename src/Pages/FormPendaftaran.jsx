import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPendaftaran = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    parentName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data pendaftaran:", formData);
    // Tambahkan logika submit ke API atau penyimpanan data
    alert(
      "Pendaftaran berhasil dikirim!\nSilahkan ikuti petunjuk untuk pendaftaran selanjutnya"
    );
    navigate("/pendaftaran");
  };
  return (
    <div className="min-h-screen bg-gray-50/70 py-21">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 py-4 px-6">
          <h2 className="text-xl font-bold text-white">
            Formulir Pendaftaran TK
          </h2>
          <p className="text-blue-100 text-sm">
            Isi data dengan lengkap dan benar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Nama Lengkap Anak
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Tanggal Lahir</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Jenis Kelamin</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Pilih</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Nama Orang Tua/Wali
            </label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nomor Telepon</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Alamat</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="flex items-center mb-6">
            <input type="checkbox" id="agreeTerms" className="mr-2" required />
            <label htmlFor="agreeTerms" className="text-gray-700 text-sm">
              Saya menyatakan bahwa data yang diisi adalah benar dan dapat
              dipertanggungjawabkan.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            Daftarkan Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPendaftaran;
