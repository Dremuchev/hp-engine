
export type ControlSize = 'small' | 'medium' | 'large';

export type ButtonType = 'primary' | 'secondary' | 'success' | 'negative' | 'cancel' | 'link';

export type HexColor = string;

export type Button = {
    Rested: HexColor;
    Hover: HexColor;
    Pressed: HexColor;
    Text: HexColor;
    InvertedText: HexColor;
    Border?: HexColor;
    DisableBorder?: HexColor;
    DisableText?: HexColor;
    DisableBackgroundColor?: HexColor;
};

export type DisabledButton = {
    color: HexColor;
    backgroundColor: HexColor;
    borderColor: HexColor;
};

export type ButtonsColorPalette = Record<ButtonType, Button>;

export type Dimensions = {
    height: string;
    padding: string;
    fontSize: string
};
