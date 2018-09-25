import * as React from 'react';
import styled, { css, StyledComponent } from 'react-emotion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Theme } from '../utils/theme';
import Navigation from './navitation';
import { fromEvent, Subscription } from 'rxjs';
import {
  throttleTime,
  pairwise,
  map,
  distinctUntilChanged,
} from 'rxjs/operators';

const StyledHeader: StyledComponent<
  { isVisible: boolean },
  any,
  Theme
> = styled('header')`
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
  transition: transform 200ms ease-in;
  transform: ${props =>
    props.isVisible ? 'translateY(0)' : 'translateY(-100%)'};
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

enum Direction {
  Up = 'Up',
  Down = 'Down',
}
export class Header extends React.Component<
  any,
  { isHeaderVisible: boolean; isNavigationOpen: boolean }
> {
  state = {
    isHeaderVisible: true,
    isNavigationOpen: false,
  };

  private subscription: Subscription;

  componentDidMount() {
    this.subscription = fromEvent<Event>(window, 'scroll')
      .pipe(
        map(() => window.pageYOffset),
        pairwise(),
        map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
        distinctUntilChanged(),
        map(direction => direction === Direction.Up)
      )
      .subscribe(isHeaderVisible => this.setState({ isHeaderVisible }));
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleNavigation = () => {
    this.setState(prev => {
      const nextIsNavigationOpen = !prev.isNavigationOpen;

      if (nextIsNavigationOpen) {
        document.documentElement.classList.add('no-scroll');
      } else {
        document.documentElement.classList.remove('no-scroll');
      }

      return { isNavigationOpen: nextIsNavigationOpen };
    });
  };

  render() {
    return (
      <>
        <StyledHeader isVisible={this.state.isHeaderVisible}>
          <Title>Kulinarnia</Title>
          <Hamburger
            isOpen={this.state.isNavigationOpen}
            isOpenChange={this.toggleNavigation}
          />
        </StyledHeader>
        <Navigation isOpen={this.state.isNavigationOpen} />
      </>
    );
  }
}

export default Header;
