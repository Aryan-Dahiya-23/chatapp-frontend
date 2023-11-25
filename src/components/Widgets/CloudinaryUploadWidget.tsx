// import React, { createContext, useContext, useEffect, useState } from "react";
// import { HiPhoto } from "react-icons/hi2";
// import { AuthContext } from "../../contexts/AuthContext";

// interface CloudinaryUploadWidgetProps {
//     uwConfig: any;
// }

// interface CloudinaryScriptContextProps {
//     loaded: boolean;
// }

// const CloudinaryScriptContext = createContext<CloudinaryScriptContextProps>({ loaded: false });

// const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ uwConfig }) => {

//     const { setMessageUrl } = useContext(AuthContext);
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         if (!loaded) {
//             const uwScript = document.getElementById("uw");
//             if (!uwScript) {
//                 // If not loaded, create and load the script
//                 const script = document.createElement("script");
//                 script.setAttribute("async", "");
//                 script.setAttribute("id", "uw");
//                 script.src = "https://upload-widget.cloudinary.com/global/all.js";
//                 script.addEventListener("load", () => setLoaded(true));
//                 document.body.appendChild(script);
//             } else {
//                 setLoaded(true);
//             }
//         }
//     }, [loaded]);


//     const initializeCloudinaryWidget = () => {
//         if (loaded) {
//             const myWidget = (window as any).cloudinary.createUploadWidget(
//                 uwConfig,
//                 (error: any, result: any) => {
//                     if (!error && result && result.event === "success") {
//                         setMessageUrl(result.info.url);
//                     }
//                 }
//             );

//             myWidget.open();
//         }

//     };

//     return (
//         <CloudinaryScriptContext.Provider value={{ loaded }}>
//             <button onClick={initializeCloudinaryWidget}>
//                 <HiPhoto className="chat-icons text-sky-500 hover:text-sky-600" />
//             </button>
//         </CloudinaryScriptContext.Provider>
//     );
// };

// export default CloudinaryUploadWidget;
// export { CloudinaryScriptContext };



// id="upload_widget"

// document.getElementById("upload_widget")?.addEventListener(
//     "click",
//     function () {
//         myWidget.open();
//     },
//     false
// );


import React, { createContext, useContext, useEffect, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { AuthContext } from "../../contexts/AuthContext";

interface CloudinaryUploadWidgetProps {
    uwConfig: any;
}

interface CloudinaryScriptContextProps {
    loaded: boolean;
}

const CloudinaryScriptContext = createContext<CloudinaryScriptContextProps>({ loaded: false });

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ uwConfig }) => {
    const { setMessageUrl } = useContext(AuthContext);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const uwScript = document.getElementById("uw");
            if (!uwScript) {
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => {
                    setLoaded(true);
                });
                document.body.appendChild(script);
            } else {
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        if (loaded) {
            setLoading(true);
            const myWidget = (window as any).cloudinary.createUploadWidget(
                uwConfig,
                (error: any, result: any) => {
                    setLoading(false);
                    if (!error && result && result.event === "success") {
                        setMessageUrl(result.info.url);
                    }
                }
            );

            myWidget.open();
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <button onClick={initializeCloudinaryWidget}>
                {loading ? (
                    <span className="loading loading-infinity text-sky-500"></span>
                ) : (
                    <HiPhoto className="chat-icons text-sky-500 hover:text-sky-600" />
                )}
                {/* <span className="loading loading-spinner text-info"></span> */}
                {/* <span className="loading loading-dots  text-sky-500"></span> */}

            </button>
        </CloudinaryScriptContext.Provider>
    );
};

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };