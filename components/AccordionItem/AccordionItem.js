import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const AccordionItem = ({ open, toggle, title, description }) => {
  return (
    <>
      <div className="flex" onClick={toggle}>
        <p className="font-semibold text-sm w-full pb-4 pt-4">{title}</p>
        <div className="text-sm font-semibold pt-2">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="text-xs leading-6 pl-2 pb-4">{description}</div>
      </Collapse>
      <div className="w-full bg-black border-b-2 border-b-black" />
    </>
  );
};

export default AccordionItem;
