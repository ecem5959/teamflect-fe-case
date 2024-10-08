import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Goals from './pages/Goals/Goals';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { UserProvider } from './contexts/UserContext';
import { GoalProvider } from './contexts/GoalContext';
import { FormProvider } from './contexts/FormContext';
import ToasterProvider from './providers/ToasterProvider';
import './styles/global.scss';

const App = () => {
  return (
    <FormProvider>
      <GoalProvider>
        <UserProvider>
          <DndProvider backend={HTML5Backend}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/goals" element={<Goals />} />
              </Routes>
              <ToasterProvider />
            </Layout>
          </DndProvider>
        </UserProvider>
      </GoalProvider>
    </FormProvider>
  );
};

export default App;
