import { useState } from "react"
import { Appearance } from "react-native";

const isDarkMode = Appearance.getColorScheme() === 'dark'
//const isDarkMode = Appearance.getColorScheme() === 'light'

export const Color = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    BG1: isDarkMode ? '#16244b' : '#B4D2E7',
    TEXTONBG1: isDarkMode ? '#79A3F0' : '#79A3F0',
    BG2: isDarkMode ? '#5491a3' : '#407EEA',
    TEXTONBG2: isDarkMode ? '#B4D2E7' : '#B4D2E7',
    BG3: isDarkMode ? '#094c7e' : '#F8F8F8',
    TEXTONBG3: isDarkMode ? '#F8F8F8' : '#2C3847',
    GREYONBG3: isDarkMode ? '#2C3847' : '#C6CAD0',
    BUTTON1: isDarkMode ? '#F8F8F8' : '#F8F8F8',
    TEXTONBUTTON1: isDarkMode ? '#407EEA' : '#407EEA',
    BUTTON2: isDarkMode ? '#79A3F0' : '#79A3F0',
    TEXTONBUTTON2: isDarkMode ? '#F8F8F8' : '#F8F8F8',
}