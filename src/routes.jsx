import { Inicio } from "./pages/inicio/Inicio.jsx";
import { NewVideo } from "./pages/newVideo/NewVideo.jsx";
import { Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from './contexts/contexts.jsx';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './index.css'

function AppRoutes() {
    return (
        <GlobalContextProvider>
            <div className="app-wrapper">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/newVideo" element={<NewVideo />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </GlobalContextProvider>
    )
}

export default AppRoutes;