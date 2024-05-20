import palette from '@/styles/palette.module.scss'

export const useColor = () => {
  const color = {
    black: palette.black,
    grayDark: palette.grayDark,
    grayLight: palette.grayLight,
    blueLight: palette.blueLight,
    blueDark: palette.blueDark,
    baseLight: palette.baseLight,
  }

  return {
    color,
  }
}
