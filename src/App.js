import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './styles/global.scss';
import Layout from "./components/Layout/Layout";
import Goals from './pages/Goals/Goals';
const App = () => {
  return (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/goals" element={<Goals />} />
            </Routes>
        </Layout>
    </>
  );
};

export default App;