import "./index.css";
import Beranda from "./Pages/Beranda";
import Pendaftaran from "./Pages/Pendaftaran";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import NotFound from "./Pages/NotFound";
import FormPendaftaran from "./Pages/FormPendaftaran";
import Galeri from "./Pages/Galeri";

// import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Beranda />} />
        <Route path="pendaftaran" element={<Pendaftaran />} />
        <Route path="form-pendaftaran" element={<FormPendaftaran />} />
        <Route path="galeri" element={<Galeri />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
    // <>
    //   <div>
    //     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    //     <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    //     <Routes></Routes>
    //     <Footer />
    //   </div>
    // </>
  );
}

export default App;
