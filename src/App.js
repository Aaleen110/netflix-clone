import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage from './screens/mainPage';
import ManageProfile from './screens/manageProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browse" element={<MainPage />} />
        <Route path="/profiles" element={<ManageProfile />} />
        <Route path="/" element={<Navigate replace to="/profiles" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
