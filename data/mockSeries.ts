export interface SeriesOption {
    label: string;
    value: string;
}

export const mockSeriesOptions: readonly SeriesOption[] = [
    { label: 'My Amazing Series', value: 'series-1' },
    { label: 'Documentary Project', value: 'series-2' },
    { label: 'Comedy Show', value: 'series-3' },
] as const;
