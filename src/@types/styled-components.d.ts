import { dark } from '@/themes/dark';

declare module 'styled-components' {
  type Theme = typeof dark;
  export interface DefaultTheme extends Theme {}
}
