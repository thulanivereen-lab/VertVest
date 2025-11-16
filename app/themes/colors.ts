/**
 * Centralized color definitions for the app.
 * This file was extracted from `app/constants/theme.ts` so other modules
 * can import colors directly from `app/themes/colors`.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const lightColors = {
		text: '#11181C',
		background: '#fff',
		tint: tintColorLight,
		icon: '#687076',
		tabIconDefault: '#687076',
		tabIconSelected: tintColorLight,
    };

export const darkColors = {
		text: '#ECEDEE',
		background: '#151718',
		tint: tintColorDark,
		icon: '#9BA1A6',
		tabIconDefault: '#9BA1A6',
		tabIconSelected: tintColorDark,
	};


export type Colors = typeof lightColors & typeof darkColors;

