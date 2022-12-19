import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './screens/mainPage';
import ManageProfile from './screens/manageProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browse" element={<MainPage />} />
        <Route path="/profiles" element={<ManageProfile />} />
        <Route path="/" element={<ManageProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
