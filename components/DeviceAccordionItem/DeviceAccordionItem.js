import React from "react";
import { Collapse } from "react-collapse";

const DeviceAccordionItem = ({ open, toggle, title, description }) => {
  return (
    <>
      <div className="flex py-4 justify-center" onClick={toggle}>
        {/* <p className="w-full pb-4 pt-4 text-center">{title}</p> */}
        <div className="inline-block hover:border-yellow-600 rounded-t-lg py-4 px-4 text-sm text-center border-transparent border-b-2 dark:hover:border-yellow-600">
          {title}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="text-base leading-8 pl-4 pb-8">{description}</div>
      </Collapse>
      <hr className="w-full" />
      {/* <div className="w-full bg-black border-b-[0.025rem] border-b-gray-300" /> */}
    </>
  );
};

export default DeviceAccordionItem;
