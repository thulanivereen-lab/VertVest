export enum InputType {
    TITLE = 'title',
    DESCRIPTION = 'description',
}

export interface FreeTextInputProps {
    title: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    maxLength: number;
    inputType: InputType;
    error?: string;
}
