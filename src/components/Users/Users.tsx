import { useContext } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeContext";
import UsersItems from "./UsersItems";

const Users = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const handleTheme = (e: { target: { checked: unknown; }; }) => {
        if (e.target.checked || localStorage.getItem("theme") === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div className="flex flex-col mb-16 md:mb-0 w-full md:w-[35%] lg:w-[22%] lg:pl-2 md:h-[100vh]">

            <div className="flex flex-row justify-between items-center px-2 py-4 lg:px-1 lg:pr-3">
                <div className=" text-3xl font-bold">
                    <p className="">Messages</p>
                </div>

                <div className="flex flex-row justify-between space-x-6">

                    <div className="flex flex-row items-center justify-center cursor-pointer hover:opacity-80">
                        <MdOutlineGroupAdd className="icons" />
                    </div>

                    <label className="swap swap-rotate hover:opacity-80">
                        <input
                            type="checkbox"
                            className="theme-controller"
                            value="synthwave"
                            onChange={handleTheme}
                            checked={theme === "dark"}
                        />
                        <svg
                            className="swap-off fill-current icons"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg
                            className="swap-on fill-current icons"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </div>

            </div>

            <div className="flex flex-col space-y-1 overflow-y-auto py-2 custom-scrollbar">
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
                <UsersItems />
            </div>
        </div>
    )
}

export default Users;



// import { MdOutlineGroupAdd } from "react-icons/md";
// import UsersItems from "./UsersItems";

// const Users = () => {
//     return (
//         <div className="flex flex-col mb-16 md:mb-0 w-full md:w-[35%] lg:w-[22%] lg:pl-2 md:h-[100vh] ">

//             <div className="flex flex-row justify-between px-2 py-4 lg:px-1 lg:pr-3">
//                 <div className="w-1/2 text-3xl font-bold">
//                     <p className="">Messages</p>
//                 </div>

//                 <div className="flex flex-row items-center justify-center cursor-pointer">
//                     <MdOutlineGroupAdd className="icons" />
//                 </div>
//             </div>


//             <div className="flex flex-col space-y-1 overflow-y-auto py-2 custom-scrollbar">
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//                 <UsersItems />
//             </div>
//         </div>
//     )
// }

// export default Users;