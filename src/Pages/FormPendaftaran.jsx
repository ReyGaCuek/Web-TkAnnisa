import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const FormPendaftaran = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    setIsSubmitting(true);

    // template ID, service ID, dan public key Anda dari EmailJS
    const templateParams = {
      to_name: formData.parentName,
      child_name: formData.fullName,
      birth_date: formData.birthDate,
      gender: formData.gender === "L" ? "Laki-laki" : "Perempuan",
      phone: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
    };

    // console.log("SERVICE:", import.meta.env.VITE_SERVICE_ID);
    // console.log("TEMPLATE:", import.meta.env.VITE_TEMPLATE_ID);
    // console.log("KEY:", import.meta.env.VITE_PUBLIC_KEY);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(
            "Email berhasil dikirim!",
            response.status,
            response.text
          );
          setSubmitSuccess(true);
          setIsSubmitting(false);
          alert(
            "Pendaftaran berhasil dikirim!\nSilahkan cek email Anda untuk informasi selanjutnya."
          );
          navigate("/pendaftaran");
        },
        (error) => {
          console.log("Gagal mengirim email:", error);
          setIsSubmitting(false);
          alert(
            "Terjadi kesalahan saat mengirim formulir. Silahkan coba lagi nanti."
          );
        }
      );
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
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-bold py-3 px-4 rounded-lg transition`}
          >
            {isSubmitting ? "Mengirim..." : "Daftarkan Sekarang"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPendaftaran;
