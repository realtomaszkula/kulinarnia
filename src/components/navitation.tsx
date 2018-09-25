import * as React from 'react';
import { Link } from 'gatsby';
import styled, { StyledComponent, css } from 'react-emotion';
import { Theme } from '../utils/theme';
import { FacebookIcon, YoutubeIcon, InstagramIcon } from './social-icons';

interface NavLink {
  to: string;
  label: string;
}

const StyledNav: StyledComponent<{ isOpen: boolean }, any, Theme> = styled(
  'nav'
)`
  position: fixed;
  color: white;
  background-color: ${props => props.theme.colors.primaryLight};
  top: ${props => props.theme.layout.headerHeight};
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 200ms ease-in;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Links = styled('section')`
  flex: 1;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 2.4rem;
  margin-bottom: 3rem;
  text-decoration: none;
  text-align: center;
  color: white;
`;

const SocialMedia = styled('footer')`
  text-align: center;
`;
const socialMediaIconCSS = css`
  margin: 0 1rem;
  color: white;
  font-size: 2.4rem;
`;

export class Navigation extends React.Component<{
  isOpen: boolean;
}> {
  readonly links: NavLink[] = [
    { to: 'kontakt', label: 'Kontakt' },
    { to: 'przepisy', label: 'Przepisy' },
  ];
  readonly icons: React.StatelessComponent<{ className: string }>[] = [
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
  ];

  render() {
    return (
      <StyledNav isOpen={this.props.isOpen}>
        <Links>
          {this.links.map(link => (
            <StyledLink key={link.to} to={link.to}>
              {link.label}
            </StyledLink>
          ))}
        </Links>
        <SocialMedia>
          {this.icons.map((Icon, i) => (
            <Icon key={i} className={socialMediaIconCSS} />
          ))}
        </SocialMedia>
      </StyledNav>
    );
  }
}

export default Navigation;
