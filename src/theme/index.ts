import { Month, ThemeIndex } from '^/types';

const THEME_BUTTONS: Record<ThemeIndex, string[]> = {
  [ThemeIndex.DEFAULT]: ['⚫', '⚪'],
  [ThemeIndex.HALLOWEEN]: ['🟣', '🟠'],
  [ThemeIndex.WINTER]: ['🔴', '🟢'],
};

const THEME_TITLES: Record<ThemeIndex, string> = {
  [ThemeIndex.DEFAULT]: 'React Gomoku',
  [ThemeIndex.HALLOWEEN]: 'Halloween Gomoku',
  [ThemeIndex.WINTER]: 'Holiday Gomoku',
};

const THEME_INDEX: ThemeIndex = (() => {
  const dat: Date = new Date();

  const day: number = dat.getDate();
  const month: number = dat.getMonth();

  if (month === Month.OCT && day === 31) {
    // October 31
    return ThemeIndex.HALLOWEEN;
  }

  if ((month === Month.JAN && day === 1) || (month === Month.DEC && day === 25)) {
    // January 1 or December 25
    return ThemeIndex.WINTER;
  }

  return ThemeIndex.DEFAULT;
})();

export const themeButtons: string[] = THEME_BUTTONS[THEME_INDEX];
export const themeTitle: string = THEME_TITLES[THEME_INDEX];

export const palette = {
  mainTheme: '#61dafb',
  dark: '#282c34',
};
