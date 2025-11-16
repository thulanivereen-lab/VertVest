import { Platform } from 'react-native';

const fontMap = {
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  android: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
} as const;

// Platform.select(...) may return undefined for unsupported platforms.
// So we safely fallback to Android fonts.
export const fonts = fontMap[Platform.OS as keyof typeof fontMap] || fontMap.ios;

export const typography = {
  body: 16,
  small: 14,
  title: 20,
  heading: 28,
  weightRegular: '400' as const,
  weightMedium: '500' as const,
  weightBold: '700' as const,
  fonts,
};

export type Typography = typeof typography;
