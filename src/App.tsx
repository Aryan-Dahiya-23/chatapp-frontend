import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import { queryClient } from "./api/auth";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";

const App = () => {

  return (

    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/chats/:id" element={<ChatPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </QueryClientProvider>
  );

}

export default App

// import { useState } from "react";
// import CloudinaryUploadWidget from "./components/Widgets/CloudinaryUploadWidget";
// import { Cloudinary } from "@cloudinary/url-gen";
// // import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";


// export default function App() {
//   const [publicId, setPublicId] = useState("");
//   const [cloudName] = useState("hzxyensd5");
//   const [uploadPreset] = useState("aoh4fpwm");

//   const [uwConfig] = useState({
//     cloudName,
//     uploadPreset
//   });

//   // Create a Cloudinary instance and set your cloud name.
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName
//     }
//   });

//   return (
//     <div className="App">
//       <CloudinaryUploadWidget uwConfig={uwConfig}/>
//     </div>
//   );
// }



{/* <div style={{ width: "500px" }}>
  <AdvancedImage
    style={{ maxWidth: "100%" }}
    cldImg={myImage}
    plugins={[responsive(), placeholder()]}
  />
</div> */}