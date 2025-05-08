import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const CHAT_LIMIT = 5;

const ChatWindow = () => {
    const [messages, setMessage] = useState([]);

    var nameList = [
        'Time', 'Past', 'Future', 'Dev',
        'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
        'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
        'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
        'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
        'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
        'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
        'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
        'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
        'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
        'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
        'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
        'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
        'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
        'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
        'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
        'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
        'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
        'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
        'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
        'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
    ];
    function generate() {
        var finalName = nameList[Math.floor(Math.random() * nameList.length)];
        return finalName;
    };

    const fetchData = async () => {
        const data = [
            {
                id: "0",
                name: generate(),
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdCLDw2AX_RqKwHAGxw7kATWlnt9i19QmHA&s",
                message: "Hello"
            },
        ]
        setMessage((messages) => {
            let newMessages = [...data, ...messages];
            newMessages = newMessages.splice(0, CHAT_LIMIT)
            return newMessages;
        })
    }

    useEffect(() => {
        const s = setInterval(() => {
            fetchData()
        }, 2000)

        return () => {
            clearInterval(s);
        }
    }, [])

    const addMessage = (message) => {
        setMessage((messages)=>{
            const newMessage = {
                id: "0",
                name: "RONALDO",
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdCLDw2AX_RqKwHAGxw7kATWlnt9i19QmHA&s",
                message: message
            }
            let newMessages = [{...newMessage}, ...messages];
            return newMessages;
        })
    }

    return (
        <div className="flex flex-col">
            <div className="w-full h-[550px] m-5 border border-black flex overflow-y-scroll flex-col-reverse">
                {messages.map((msg, i) => <ChatMessage key={i} {...msg}></ChatMessage>)}
            </div>
            <div className="mx-5 w-full">
                <ChatInput addMessage = {addMessage}></ChatInput>
            </div>
        </div>

    )
}
export default ChatWindow;