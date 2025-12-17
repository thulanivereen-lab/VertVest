export interface DropdownOption {
    label: string;
    value: string;
}

export interface DropdownProps {
    label: string;
    placeholder?: string;
    value?: string;
    options: readonly DropdownOption[];
    onChange: (value: string) => void;
}
