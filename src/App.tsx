import 'react-toastify/dist/ReactToastify.css';
import React, {useState} from "react";
import { Routes as Router, Route } from 'react-router-dom';
import {AuthMiddleware} from "./middleware/auth.middleware";
import {QueryClient, QueryClientProvider} from "react-query";
import {useAtom} from "jotai";
import {global} from "./store";
import {ToastContainer} from "react-toastify";
import {Routes} from "./Routes";
import {NotFound404, Planning, Recettes} from "./pages";

const queryClient:QueryClient = new QueryClient()

function App() {

    const [Global] = useAtom(global)

    /*https://plainenglish.io/blog/new-approach-for-working-with-react-router-dom-82b7be0404b9*/
    /*https://betterprogramming.pub/how-to-authentication-users-with-token-in-a-react-application-f99997c2ee9d*/
    // @ts-ignore
    return (
        <QueryClientProvider client={queryClient}>
            {/*<AuthContext.Provider value={token}>*/}
                <div className={Global.theme}>
                    <ToastContainer theme={Global.theme}/>
                    <div className={"App"}>
                        <Router>
                            <Route path="*" element={<NotFound404 />} />
                            {Routes.map(({path, element:Element,layout:Layout},id) =>
                                <Route key={id} path={path} element={
                                    Layout ?
                                        // @ts-ignore
                                        <AuthMiddleware>
                                            <Layout>
                                                <Element/>
                                            </Layout>
                                        </AuthMiddleware>
                                        :
                                        <AuthMiddleware>
                                            <Element/>
                                        </AuthMiddleware>
                                } />
                            )}

                            {/*<Route path={"calendar"} element={
                                <AuthMiddleware>
                                    <Header />
                                    <CalendarPage />
                                </AuthMiddleware>
                            }/>*/}
                            {/* <Route index element={
                                <AuthMiddleware>
                                    <Header />
                                    <Recettes />
                                </AuthMiddleware>
                            }/>*/}

                        </Router>
                    </div>
                </div>
            {/*</AuthContext.Provider>*/}
        </QueryClientProvider>
    )
}

export default App
