import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Footer One</FooterLinkTitle>
              <FooterLink to='/'>Link One</FooterLink>
              <FooterLink to='/'>Link Two</FooterLink>
              <FooterLink to='/'>Link Three</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Footer Two</FooterLinkTitle>
              <FooterLink to='/'>Link One</FooterLink>
              <FooterLink to='/'>Link Two</FooterLink>
              <FooterLink to='/'>Link Three</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Footer One</FooterLinkTitle>
              <FooterLink to='/'>Link One</FooterLink>
              <FooterLink to='/'>Link Two</FooterLink>
              <FooterLink to='/'>Link Three</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Footer Two</FooterLinkTitle>
              <FooterLink to='/'>Link One</FooterLink>
              <FooterLink to='/'>Link Two</FooterLink>
              <FooterLink to='/'>Link Three</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>kekW</SocialLogo>
            <WebsiteRights>
              kekW © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
