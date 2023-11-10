/* eslint-disable @typescript-eslint/no-unused-vars */
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md"
import { IoLogOutOutline } from "react-icons/io5"
import OnlineAvatar from "../Avatar/OnlineAvatar";
import RingAvatar from "../Avatar/RingAvatar";

const DesktopNavigation = () => {
    return (
        <div className="md:flex md:flex-col hidden justify-between items-center border-r-2 border-gray-200 md:w-[7%] lg:w-[5%] py-4">

            <div className="space-y-3 cursor-pointer">
                <div className="hover:bg-gray-200 rounded-md p-2.5">
                    <BsFillChatDotsFill className="icons" />
                </div>

                <div className="hover:bg-gray-200 rounded-md p-2.5">
                    <MdPeopleAlt className="icons" />
                </div>

                <div className="hover:bg-gray-200 rounded-md p-2.5">
                    <IoLogOutOutline className="icons" />
                </div>

            </div>

            <div className="cursor-pointer p-2">
                <RingAvatar
                    height="9"
                    width="9"
                    imgSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
            </div>
        </div>
    )
}

export default DesktopNavigation;