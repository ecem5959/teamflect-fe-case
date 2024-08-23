import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './styles/global.scss';
import Layout from './components/Layout/Layout';
import Goals from './pages/Goals/Goals';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </Layout>
    </DndProvider>
  );
};

export default App;
