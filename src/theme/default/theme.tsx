import colors from './colors';
import sizes from './sizes';
import borders from './borders';
import fontFamilies from './font-families';
import fontSizes from './font-sizes';
import fontWeights from './font-weights';


interface ThemeInterface {
    color: { [key in keyof typeof colors]: object }, // TODO
    size: { [key in keyof typeof sizes]: object }, // TODO
    border: { [key in keyof typeof borders]: object }, // TODO
    font: {
        family: { [key in keyof typeof fontFamilies]: string },
        size: { [key in keyof typeof fontSizes]: string }, // TODO
        weight: { [key in keyof typeof fontWeights]: number }
    }
}

const DefaultTheme: ThemeInterface = {
    color: colors,
    size: sizes,
    border: borders,
    font: {
        family: fontFamilies,
        size: fontSizes,
        weight: fontWeights,
    }
};

export { DefaultTheme, ThemeInterface };