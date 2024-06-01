import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./home";
import PageNotFound from "./404Page";

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
            </Routes>
        </Router>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)


