import 'styled-components';
import theme from './styles/blackTheme';

declare module 'styled-components' {
   type ThemeType = typeof theme;
   export interface DefaultTheme extends ThemeType {}
}
