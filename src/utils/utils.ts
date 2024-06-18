export const getCurrentPath = () => window.location.pathname

export const getTheme = () => {
  let theme: 'light' | 'dark' = 'light'

  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme') !== null) {
    if (localStorage.getItem('theme') === 'dark') {
      theme = 'dark'
    }
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
  }

  return theme
}
