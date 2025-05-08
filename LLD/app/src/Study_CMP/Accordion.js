import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {

    const data = [
        {
            title:"Accordion 1",
            body:"Dummy body for accordian 1"
        },
        {
            title:"Accordion 2",
            body:"Dummy body for accordian 2"
        },
        {
            title:"Accordion 3",
            body:"Dummy body for accordian 3"
        }
    ];

    const [openIndex, setOpenIndex] = useState(-1)

    return (
        <div className="w-[50%] m-auto mt-10">
            {
                data.map((elm, i) =>  <AccordionItem key={i} title={elm.title} body={elm.body} isOpen={openIndex === i} setIsOpen={() => {openIndex===i ? setOpenIndex(-1) :setOpenIndex(i)}}/>)
            }
           
        </div>
    )
}
export default Accordion;