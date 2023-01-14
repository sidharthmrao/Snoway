import { Appearance } from "react-native";

const isDarkMode = (Appearance.getColorScheme() === 'dark')

export const Color = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    BG1: isDarkMode ? '#B4D2E7' : '#16244b',
    TEXTONBG1: isDarkMode ? '#79A3F0' : '#79A3F0',
    BG2: isDarkMode ? '#407EEA' : '#5491a3',
    TEXTONBG2: isDarkMode ? '#B4D2E7' : '#B4D2E7',
    BG3: isDarkMode ? '#F8F8F8' : '#094c7e',
    TEXTONBG3: isDarkMode ? '#2C3847' : '#F8F8F8',
    GREYONBG3: isDarkMode ? '#C6CAD0' : '#2C3847',
    BUTTON1: isDarkMode ? '#F8F8F8' : '#F8F8F8',
    TEXTONBUTTON1: isDarkMode ? '#407EEA' : '#407EEA',
    BUTTON2: isDarkMode ? '#79A3F0' : '#79A3F0',
    TEXTONBUTTON2: isDarkMode ? '#F8F8F8' : '#F8F8F8',
}