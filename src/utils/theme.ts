export const getTheme = () => {
  let theme: 'light' | 'dark' = 'light'

  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme') !== null) {
    if (localStorage.getItem('theme') === 'dark') {
      theme = 'dark'
    }
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
  }

  if (theme === 'dark') {
    setDarkTheme()
  }

  return theme
}

export const setLightTheme = () => {
  localStorage.setItem('theme', 'light')

  // Change Styles
  document.getElementById('app')?.classList.remove('dark')
  document.body.classList.remove('dark')
}

export const setDarkTheme = () => {
  localStorage.setItem('theme', 'dark')

  // Change Styles
  document.getElementById('app')?.classList.add('dark')
  document.body.classList.add('dark')
}
