import { useDisclosure } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        onToggle,
        onOpen,
        onClose,
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
