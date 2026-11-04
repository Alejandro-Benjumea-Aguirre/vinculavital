import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [rol, setRol] = useState(null);
  const [usuario, setUsuario] = useState(null);

  return (
    <AppContext.Provider value={{ rol, setRol, usuario, setUsuario }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de AppProvider");
  return ctx;
}
