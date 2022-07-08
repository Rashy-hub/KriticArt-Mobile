import { atom, useAtom } from 'jotai'

export const LIGHT = {
    dark: false,
    colors: {
        primary: 'darkblue',
        background: 'lightgrey',
        card: 'antiquewhite',
        text: 'steelblue',
        border: 'grey',
        notification: 'black',
    },
}

export const DARK = {
    dark: true,
    colors: {
        primary: 'antiquewhite',
        background: 'steelblue',
        card: 'darkblue',
        text: 'lightgrey',
        border: 'grey',
        notification: 'black',
    }
}

export const ThemeAtom = atom(LIGHT)

export function useTheme() {
    const [theme] = useAtom(ThemeAtom)

    return {
        ...theme,
        title: {
            color: theme.colors.text
        },
        button: {
            backgroundColor: theme.colors.text
        },
        buttonText: {
            color: theme.colors.background
        }
    }
}