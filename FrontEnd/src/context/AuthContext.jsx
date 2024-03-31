import { createContext,useState,useContext  } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    return <AuthContext.Provider value={{auth,setAuth}}>{children}</AuthContext.Provider>;
};
