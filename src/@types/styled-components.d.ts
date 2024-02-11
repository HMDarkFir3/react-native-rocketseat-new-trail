import 'styled-components';

import { dark } from '@/themes';

declare module 'styled-components' {
  type Theme = typeof dark;

  export interface DefaultTheme extends Theme {}
}
