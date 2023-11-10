interface RingAvatarProps {
    height: string;
    width: string;
    imgSrc: string;
}

const RingAvatar: React.FC<RingAvatarProps> = ({ height, width, imgSrc }) => {
    return (
        <div className="avatar">
            <div className={`w-${width} h-${height} rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}>
            {/* <div className={`w-9 h-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}> */}
                <img src={imgSrc} alt="profile" />
            </div>
        </div >
    )
}

export default RingAvatar;




// import { BsFillChatDotsFill } from "react-icons/bs";
// import { MdPeopleAlt } from "react-icons/md"
// import { IoLogOutOutline } from "react-icons/io5"
// import OnlineAvatar from "../Avatar/OnlineAvatar";
// import RingAvatar from "../Avatar/RingAvatar";


// const Navigation = () => {
//     return (
//         <div className="flex flex-col justify-between items-center border-r-2 border-gray-200 md:max-w-[8%] lg:w-[5%] py-4">

//             <div className="space-y-3 cursor-pointer">
//                 <div className="hover:bg-gray-200 rounded-md p-2.5">
//                     <BsFillChatDotsFill className="icons" />
//                 </div>

//                 <div className="hover:bg-gray-200 rounded-md p-2.5">
//                     <MdPeopleAlt className="icons" />
//                 </div>

//                 <div className="hover:bg-gray-200 rounded-md p-2.5">
//                     <IoLogOutOutline className="icons" />
//                 </div>

//             </div>

//             <div className="cursor-pointer p-2">
//                 <RingAvatar
//                     height="9"
//                     width="9"
//                     imgSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//                 />
//             </div>
//         </div>
//     )
// }

// export default Navigation;