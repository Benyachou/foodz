import AuthContext from "./contexts/auth.context";
import {Header} from "./partials/Header";
import {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import {Login,NotFound404,Planning,Recettes} from "./pages";
import {AuthMiddleware} from "./middleware/auth.middleware";
import {QueryClient, QueryClientProvider} from "react-query";
import { atomWithStorage } from 'jotai/utils'
import {useAtom} from "jotai";
import {global} from "./store";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {Modal} from "./components";

const queryClient:QueryClient = new QueryClient()

/*const darkModeAtom = atomWithStorage('darkMode', "dark")*/
function App() {

    const [Global] = useAtom(global)
    const [token, setToken] = useState({token: null, user: null})

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={token}>
                <div className={Global.theme}>
                    <ToastContainer
                        theme={Global.theme}
                    />
                    <div className={"App"}>
                        <Routes>
                            <Route index element={
                                <AuthMiddleware>
                                    <Header />
                                    <Recettes />
                                </AuthMiddleware>
                            }/>
                            {/* <Route index element={
                                <AuthMiddleware>
                                    <Header />
                                    <Planning />
                                </AuthMiddleware>
                            }/>
                            <Route path="login" element={<Login />} />
                            <Route path="*" element={<NotFound404 />} />*/}
                        </Routes>
                    </div>
                </div>
            </AuthContext.Provider>
        </QueryClientProvider>
    )
}

export default App
