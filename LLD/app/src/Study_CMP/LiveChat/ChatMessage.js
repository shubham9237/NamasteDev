
const ChatMessage = ({name, photo, message}) => {
    return (
        <div className="flex p-2">
            <img className="w-8 h-8 rounded-full m-1 " src={photo} alt="user image"></img>
            <p className="flex p-1">
                <span className="font-bold">{name} - </span>
                <span className="overflow">{message}</span>
            </p>
        </div>
    )
}
export default ChatMessage;