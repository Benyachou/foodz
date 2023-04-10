import GlobalContext from "./contexts/global.context";
import AuthContext from "./contexts/auth.context";
import {Header} from "./partials/Header";
import {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import {Login,NotFound404,Planning,Recettes} from "./pages";
import {AuthMiddleware} from "./middleware/auth.middleware";

function App() {

    const [darkMode, setDarkMode] = useState(true)
    const [token, setToken] = useState({token: null, user: null})

    /* const handleLogin = async () => {
	   const token = await fakeAuth();
	   setToken(token);
	   navigate('/dashboard');
   };

   const handleLogout = () => {
	   setToken(null);
   };

   const value = {
	   token,
	   onLogin: handleLogin,
	   onLogout: handleLogout,
   };*/

    return (
        <GlobalContext.Provider value={{darkMode, setDarkMode}}>
            <div className={`${darkMode ? "dark" : "light"}`}>
                <AuthContext.Provider value={token}>
                    <div className={"App"}>
                        <Routes>
                            <Route index element={
                                <AuthMiddleware>
                                    <Header />
                                    <Recettes />
                                </AuthMiddleware>
                            }/>
                            <Route index element={
                                <AuthMiddleware>
                                    <Header />
                                    <Planning />
                                </AuthMiddleware>
                            }/>
                            <Route path="login" element={<Login />} />
                            <Route path="*" element={<NotFound404 />} />
                        </Routes>
                    </div>
                </AuthContext.Provider>
            </div>
        </GlobalContext.Provider>)
}

export default App
