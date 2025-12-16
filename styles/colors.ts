/**
 * Notion-inspired color palette
 * Centralized color definitions for consistent styling across the app
 */
export const NOTION = {
    // Backgrounds
    background: '#FFFFFF',
    backgroundSecondary: '#F7F6F3',

    // Text
    text: '#37352F',
    textSecondary: '#787774',

    // Borders
    border: '#E9E9E7',

    // Accent (interactive elements)
    accent: '#2383E2',
    accentHover: '#1A6BC4',

    // Utility
    white: '#FFFFFF',
} as const;

export type NotionColor = typeof NOTION[keyof typeof NOTION];
