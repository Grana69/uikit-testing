import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import MenuLink from "../../../widgets/Menu/MenuLink";

interface LogoProps extends SvgProps {
  isDark: boolean;
}


const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    
    <MenuLink href="https://defi.finance/" >
      <Svg viewBox="0 0 205 26" {...props}>
        <image width="205" height="26" href={isDark ? 'https://welcome.woonkly.com/images/defi/logo-light.svg'
          : 
          'https://welcome.woonkly.com/images/defi/logo-dark.svg' 
          }/>
      </Svg>
    </MenuLink>

  )
};

export default Logo;
