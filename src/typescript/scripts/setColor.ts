import Theme from '../types/theme';
export const setColor = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
