import {Header} from "./partials/Header";
import {Recettes} from "./pages/Recettes";
import {useState} from "react";
import GlobalContext from "./contexts/global.context";

function App() {

    const [darkMode, setDarkMode] = useState(true)

    return (
        <GlobalContext.Provider value={{darkMode, setDarkMode}}>
            <div className={`${darkMode ? "dark" : "light"}`}>
                <div className={"App"}>
                    <Header />
                    <Recettes />
                </div>
            </div>
        </GlobalContext.Provider>)
}

export default App
