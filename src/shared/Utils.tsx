import { find } from 'lodash';
import themes from 'src/theme';
import { WithId } from 'src/types/custom';
import { ThemeInterface } from 'src/theme/default/theme';

const findById = (array: WithId[], id: string): WithId | undefined => {
  return find(array, (item: WithId) => item.id === id);
};

const getThemeByName = (name: string): ThemeInterface => {
  const theme: ThemeInterface = themes[name];
  if (!theme) {
    // tslint:disable-next-line:no-console
    console.error('Theme not found, setting default!');
    return themes.DefaultTheme;
  }
  return theme;
}

export {
  findById,
  getThemeByName
}

export const zIndex = {
  modal: 9000,
  overlay: 8000,
  header: 70000,
}