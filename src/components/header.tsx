import * as React from 'react';
import styled, { css, StyledComponent } from 'react-emotion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Theme } from '../utils/theme';
import Navigation from './navitation';

const StyledHeader: StyledComponent<any, any, Theme> = styled('header')`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.theme.layout.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled('h1')`
  padding: 0;
  margin: 0;
  user-select: none;
`;

const Hamburger: React.StatelessComponent<{
  isOpenChange: React.EventHandler<any>;
  isOpen: boolean;
}> = ({ isOpenChange, isOpen }) => (
  <button
    onClick={isOpenChange}
    className={css`
      color: white;
      background: none;
      outline: white;
      border: none;
      cursor: pointer;
    `}
  >
    {isOpen ? <FaTimes size="32" /> : <FaBars size="32" />}
  </button>
);

export class Header extends React.Component<any, { isOpen: boolean }> {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  render() {
    return (
      <>
        <StyledHeader>
          <Title>Kulinarnia</Title>
          <Hamburger isOpen={this.state.isOpen} isOpenChange={this.toggle} />
        </StyledHeader>
        <Navigation isOpen={this.state.isOpen} />
      </>
    );
  }
}

export default Header;
