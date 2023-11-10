/* eslint-disable @typescript-eslint/no-unused-vars */
import OfflineAvatar from "../Avatar/OfflineAvatar";
import OnlineAvatar from "../Avatar/OnlineAvatar";

const UsersItems = () => {

    const message: string = "Hey! How are you doing?";

    return (
        <div className="flex flex-row w-full px-3 lg:px-2 py-2 rounded-xl space-x-2 hover:bg-gray-100 cursor-pointer">

            <div className="flex h-16">
                <OnlineAvatar
                    height="12"
                    width="12"
                    imgSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
            </div>

            <div className="flex flex-col w-5/6 h-full">

                <div className="flex flex-row w-full justify-between">
                    <p className="lg:text-lg font-semibold lg:font-bold  max-w-[80%] md:max-w-[70%] h-full whitespace-nowrap text-ellipsis overflow-hidden">Aryan Dahiya</p>
                    <p className="text-sm text-gray-400">11:11 PM</p>
                </div>

                <div className="w-full">
                    <p className="text-gray-500 w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">{message}</p>
                </div>

            </div>
        </div>
    )
}

export default UsersItems;