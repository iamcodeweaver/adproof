import React from "react";
import Image from "next/image";
import CirclePlus from "../../public/images/circle-plus.png";
import CircleMinus from "../../public/images/circle-minus.png";
import { Collapse } from "react-collapse";

const MainAccordionItem = ({ open, toggle, id, title, description }) => {
  return (
    <>
      <div className="flex py-4 font-semibold md:text-1xl" onClick={toggle}>
        <p className="pb-4 pt-4 pr-8">{id}</p>
        <p className="w-full pb-4 pt-4">{title}</p>
        <div className="font-semibold pt-2">
          {open ? (
            <Image src={CircleMinus.src} width={60} height={60} />
          ) : (
            <Image src={CirclePlus.src} width={60} height={60} />
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="text-base leading-8 pl-4 pb-8">{description}</div>
      </Collapse>
      <div className="w-full bg-black border-b-2 border-b-gray-300" />
    </>
  );
};

export default MainAccordionItem;
