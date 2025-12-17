export interface DropdownOption {
    label: string;
    value: string;
}

export interface TeamMemberCardProps {
    name: string;
    role: string;
    access: string;
    roleOptions: readonly DropdownOption[];
    accessOptions: readonly DropdownOption[];
    onRoleChange: (value: string) => void;
    onAccessChange: (value: string) => void;
    onRemove: () => void;
}
