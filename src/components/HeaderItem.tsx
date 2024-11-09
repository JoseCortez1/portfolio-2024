import React, { FC } from "react";
import { NavigationProps } from "../../types";

const HeaderItem: FC<NavigationProps> = ({ text, link }) => {
  return (
    <a href={link} className="py-2 px-3 bg-">
      <span className="text-secondary font-bold">#</span>
      {text}
    </a>
  );
};
export default HeaderItem;
