import { HashRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import RegistrarDonacion from "./pages/RegistrarDonacion";
import Validador from "./pages/Validador";
import Catalogo from "./pages/Catalogo";
import Solicitudes from "./pages/Solicitudes";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donante" element={<RegistrarDonacion />} />
          <Route path="/validador" element={<Validador />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}
