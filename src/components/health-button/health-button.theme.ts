import { ButtonsColorPalette, ControlSize, Dimensions } from "./health-button.types";

export type ButtonsDimensions = Record<ControlSize, Dimensions>;

export const ButtonsColor: ButtonsColorPalette = {
    primary: {
        Rested: '#30B6DD',
        Hover: '#16A2D9',
        Pressed: '#0088CC',
        InvertedText: '#FFFFFF',
        Text: '#FFFFFF',
        DisableBackgroundColor: '#E1E3EB',
        DisableText: '#ACAFBF',        
    },
    secondary: {
        Rested: 'trnasparent',
        Hover: '#30B6DD',
        Pressed: '#16A2D9',
        InvertedText: '#FFFFFF',
        Text: '#30B6DD',
        Border: '#30B6DD',
        DisableText: '#ACAFBF',
        DisableBorder: '#E1E3EB',
    },
    success: {
        Rested: '#9BC837',
        Hover: '#6FAD2F',
        Pressed: '#428024',
        InvertedText: '#FFFFFF',
        Text: '#FFFFFF',
        DisableBackgroundColor: '#E1E3EB',
        DisableText: '#ACAFBF',        
    },
    negative: {
        Rested: '#FA4B4B',
        Hover: '#CC2929',
        Pressed: '#B32424',
        InvertedText: '#FFFFFF',
        Text: '#FFFFFF',
        DisableBackgroundColor: '#E1E3EB',
        DisableText: '#ACAFBF',        
    },
    cancel: {
        Rested: 'transparent',
        Hover: '#A8A9B4',
        Pressed: '#9FA1AE',
        InvertedText: '#FFFFFF',
        Text: '#8A8C99',
        Border: '#CED0DB',
        DisableText: '#ACAFBF',
        DisableBorder: '#E1E3EB',
    },
    link: {
        Rested: 'trnasparent',
        Hover: '#E1F4FA',
        Pressed: '#C4EAF5',
        InvertedText: '#30B6DD',
        Text: '#30B6DD',
        Border: 'trnasparent',
        DisableText: '#ACAFBF',
    }
};

export const ButtonsDimensions: ButtonsDimensions = {
    small: {
        height: '24px',
        padding:  '12px',
        fontSize: '12px',
    },
    medium: {
        height: '30px',
        padding:  '12px',
        fontSize: '12px',
    },
    large: {
        height: '36px',
        padding:  '18px',
        fontSize: '14px',
    },
}