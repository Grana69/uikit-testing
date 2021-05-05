import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import MenuLink from "../../../widgets/Menu/MenuLink";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <MenuLink href="https://defi.finance/" >
      <Svg viewBox="0 0 32 32" {...props}>
        <image width="32" height="32" href="https://welcome.woonkly.com/images/common/logo-responsive.svg"/>
      </Svg>
    </MenuLink>
  );
};

export default Icon;
