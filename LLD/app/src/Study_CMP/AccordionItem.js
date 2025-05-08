import { useState } from "react";

const AccordionItem = ({title, body, isOpen, setIsOpen}) => {

    // const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-black mt-1">
            <div className="font-bold p-2 bg-slate-200 flex justify-between cursor-pointer"
            onClick={() => {
                setIsOpen();
            }}
            >
                <span>{title}</span>
                <span>⬇️</span>
            </div>
            {isOpen && <div className="p-2">{body}</div>}
        </div>
    )

}

export default AccordionItem;