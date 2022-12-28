import './App.css';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage from './screens/mainPage';
import ManageProfile from './screens/manageProfile';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/browse" element={<MainPage />} />
        <Route path="/profiles" element={<ManageProfile />} />
        <Route path="/" element={<Navigate replace to="/profiles" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
