import { MdOutlineGroupAdd } from "react-icons/md";
import UsersItems from "./UsersItems";

const Users = () => {
    return (
        <div className="flex flex-col mb-16 md:mb-0 w-full md:w-[35%] lg:w-[22%] lg:pl-2 md:h-[100vh] ">

            <div className="flex flex-row justify-between px-2 py-4 lg:px-1 lg:pr-3">
                <div className="w-1/2 text-3xl font-bold">
                    <p className="">Messages</p>
                </div>

                <div className="flex flex-row items-center justify-center cursor-pointer">
                    <MdOutlineGroupAdd className="icons" />
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