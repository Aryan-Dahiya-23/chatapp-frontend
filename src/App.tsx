import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
// import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import ThemePage from "./pages/ThemePage";


const App = () => {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );

}

export default App