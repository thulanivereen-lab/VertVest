/**
 * Types for the SpotlightCard component.
 *
 * Keep presentation (styles) in `SpotlightCard.styles.ts` and the component in
 * `SpotlightCard.tsx`. This file should only contain types and small shared
 * interfaces used by the component and its consumers.
 */

export interface SpotlightCardData {
    imageUri: string;
    title: string;
    subtitle?: string;
    meta?: string;
    description?: string;
}

export interface SpotlightCardProps {
    /** Optional data object. If omitted, the component may use sensible defaults. */
    data?: Partial<SpotlightCardData>;

    /** Callbacks for the primary actions shown on the card. Optional. */
    onWatch?: () => void;
    onInvest?: () => void;

    /** Optional testID or accessibility id */
    testID?: string;
}

export type { SpotlightCardProps as Props };
