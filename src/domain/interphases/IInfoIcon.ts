import {InfoIconColors} from "../enums/InfoIcomColors";
import {InfoIconFonts} from "../enums/InfoIconFonts";

export interface IInfoIcon {
    icon: string,
    number?: number,
    text?: string,
    color?: InfoIconColors,
    fontSize?: InfoIconFonts,
    iconSize?: number,
    className?: string,
    disabled?: boolean,
}