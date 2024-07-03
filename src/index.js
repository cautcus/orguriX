import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./home";
import PageNotFound from "./pages/404Page";
import Donation from './pages/donation';
import About from './pages/about';
import More from './pages/more';

export default function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="*"
                    element={<PageNotFound />}
                />
                <Route
                        path="/more"
                        element={<More/>}
                />
                <Route
                    path="/donate"
                    element={<Donation/>}
                />
                <Route
                    path="/about"
                    element={<About/>}
                />
            </Routes>
        </Router>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)


