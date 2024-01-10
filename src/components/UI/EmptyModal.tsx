import Hello from "../../assets/Hello.gif";

const EmptyModal = () => {
    return (
        <div className="hidden justify-center items-center text-xl lg:text-3xl font-bold md:flex md:w-[52%] lg:w-[70%] border-l-2 border-gray-200">
            {/* Select a chat or start a new conversation */}
            <img src={Hello} className="max-h-[95vh]" alt="Hello" />
        </div>
    )
}

export default EmptyModal;