import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import {  SvgProps } from "../../components/Svg";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT } from "./config";
import Avatar from "./Avatar";
import PanelBody from "./PanelBody";
import Button from "../../components/Button/Button";
import * as IconModule from "./icons";
import Text from "../../components/Text/Text";
import Dropdown from "../../components/Dropdown/Dropdown";
import MenuButton from "./MenuButton";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Alert = styled.div`
  position: relative;
  width: 100%;
  background-color:red;
  z-index: 99;
  color:#FFFFFF;
  text-align:center;
  padding:3px;
  font-size:13px;
`;

const SubNavContainer = styled.div`
display: flex;
justify-content: space-between;


`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;

  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
  
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const ConnectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
}) => {
  const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
  const { MoonIcon, SunIcon, LanguageIcon } = Icons;
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>

      <StyledNav showMenu={showMenu}>
      <Alert>
      BETA VERSION. CONTRACTS BEEING AUDITED. USE AT YOUR OWN RISK. FARMS AND STAKING WILL BE ACTIVE SOON. STAY TUNNED.BETA VERSION. CONTRACTS BEEING AUDITED. USE AT YOUR OWN RISK.
      </Alert>
      <SubNavContainer>
      <ConnectContainer>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />
          <Flex>
            <PanelBody
              isPushed={true}
              isMobile={isMobile}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              cakePriceUsd={cakePriceUsd}
              pushNav={setIsPushed}
              links={links}
              priceLink={priceLink}
            />
          </Flex>
        </ConnectContainer>
        <ConnectContainer>

          <Text color="textSubtle" mx={1} bold>{`$${cakePriceUsd ? cakePriceUsd.toFixed(3) : 0}`}</Text>

          <Button variant="text" mx={3} onClick={() => toggleTheme(!isDark)}>
            {/* alignItems center is a Safari fix */}
            <Flex alignItems="center">
              {
                isDark ? <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
                :<MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
              }
                
            </Flex>
          </Button>

          <UserBlock  account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}

          <Dropdown
          
            position="top-right"
            target={
              <Button  mx={3} variant="text">
                <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
              </Button>
            }
          >
            {langs.map((lang) => (
              <MenuButton
               
                key={lang.code}
                fullWidth
                onClick={() => setLang(lang)}
                // Safari fix
                style={{ minHeight: "32px", height: "auto" }}
              >
                {lang.language}
              </MenuButton>
            ))}
          </Dropdown>
        </ConnectContainer> 
      </SubNavContainer>
        
      </StyledNav>

      <BodyWrapper>

        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
