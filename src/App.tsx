import 'react-toastify/dist/ReactToastify.css';
import { Routes as Router, Route } from 'react-router-dom';
import {AuthMiddleware} from "./middleware/auth.middleware";
import {QueryClient, QueryClientProvider} from "react-query";
import { Provider, useAtom } from "jotai";
import {theme} from "./store";
import {ToastContainer} from "react-toastify";
import {Routes} from "./Routes";
import {NotFound404} from "./pages";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity
        }
    }
});

function App() {

    const [Theme] = useAtom(theme)

    // @ts-ignore
    return (
        <QueryClientProvider client={queryClient}>
            <div className={Theme}>
                <ToastContainer theme={Theme}/>
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
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
