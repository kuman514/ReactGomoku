import { Month } from '^/types';

const THEME_BUTTONS = {
  default: ['⚫', '⚪'],
  halloween: ['🟣', '🟠'],
  winter: ['🔴', '🟢'],
};

const THEME_TITLES = {
  default: 'React Gomoku',
  halloween: 'Halloween Gomoku',
  winter: 'Holiday Gomoku',
};

const THEME_INDEX = (() => {
  const dat: Date = new Date();

  const day: number = dat.getDate();
  const month: number = dat.getMonth();

  if (month === Month.OCT && day === 31) {
    // October 31
    return 'halloween';
  }

  if ((month === Month.JAN && day === 1) || (month === Month.DEC && day === 25)) {
    // January 1 or December 25
    return 'winter';
  }

  return 'default';
})();

export const themeButtons: string[] = THEME_BUTTONS[THEME_INDEX];
export const themeTitle: string = THEME_TITLES[THEME_INDEX];

export const palette = {
  mainTheme: '#61dafb',
  dark: '#282c34',
};
