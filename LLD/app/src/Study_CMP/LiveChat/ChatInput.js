import { useState } from "react";

const ChatInput = ({ addMessage }) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim() !== "") {
            addMessage(message);
            setMessage("");
        }
    };

    return (
        <div className="flex">
            <input
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                type="text"
                name="msg"
                placeholder="Type your message..."
                id="msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="rounded-full" onClick={handleSend}>
                Send
            </button>
        </div>
    );
};

export default ChatInput;
