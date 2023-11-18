import { useQuery } from "@tanstack/react-query";
import Header from "../Header/Header"
import PeopleItems from "./PeopleItems";
import { verify } from "../../api/auth";
import { fetchPeople } from "../../api/user";

const People = () => {

    const { data: user, } = useQuery({
        queryKey: ['user'],
        queryFn: () => verify(),
        staleTime: 10000000,
    });

    const userId = user?._id;

    const { data } = useQuery({
        queryKey: ['people'],
        queryFn: () => fetchPeople(user._id),
        staleTime: 10000000,
        enabled: !!userId,
    });

    return (
        <div className="flex flex-col mb-16 md:mb-0 w-full md:w-[40%] lg:w-[25%] lg:pl-2 md:h-[100vh]">

            <Header message="People" />

            <div className="flex flex-col space-y-1 py-2 custom-scrollbar">
                {data &&
                    data.map((user: { _id: string; fullName: string; picture: string; }) => (
                        <PeopleItems
                            key={user._id}
                            userId={user._id}
                            username={user.fullName}
                            avatarSrc={user.picture}
                        />
                    ))}

            </div>
        </div>)
}

export default People;