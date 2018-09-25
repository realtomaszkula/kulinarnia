export interface Colors {
  primary: string;
  primaryLight: string;
}

export interface Layout {
  headerHeight: string;
}
export interface Theme {
  colors: Colors;
  layout: Layout;
}

export const theme: Theme = {
  layout: { headerHeight: '84px' },
  colors: {
    primary: '#ec407a',
    primaryLight: `#f48fb1`,
  },
};
