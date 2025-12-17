import { ReactNode } from 'react';

export interface ReviewSectionProps {
    title: string;
    onEdit?: () => void;
    children: ReactNode;
}
