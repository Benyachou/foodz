import 'react-toastify/dist/ReactToastify.css';
import { Routes as Router, Route } from 'react-router-dom';
import {AuthMiddleware} from "./middleware/auth.middleware";
import {QueryClient, QueryClientProvider} from "react-query";
import {useAtom} from "jotai";
import {global} from "./store";
import {ToastContainer} from "react-toastify";
import {Routes} from "./Routes";
import {NotFound404} from "./pages";

const queryClient:QueryClient = new QueryClient()

function App() {

    const [Global] = useAtom(global)

    return (
        <QueryClientProvider client={queryClient}>
            <div className={Global.theme}>
                <ToastContainer theme={Global.theme}/>
                <div className={"App"}>
                    <Router>
                        <Route path="*" element={<NotFound404 />} />
                        {Routes.map(({path, element:Element,layout:Layout,auth},id) =>
                            <Route key={id} path={path} element={
                                Layout ?
                                <AuthMiddleware enabled={auth}>
                                    <Layout>
                                        <Element/>
                                    </Layout>
                                </AuthMiddleware>
                                :
                                <AuthMiddleware enabled={auth}>
                                    <Element/>
                                </AuthMiddleware>
                            } />
                        )}
                    </Router>
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default App
