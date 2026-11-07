import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const ikammDarkTheme = {
  dark: true,
  colors: {
    background: '#0B130E',
    surface: '#132219',
    'surface-variant': '#1A2C21',
    primary: '#C5A059',
    'primary-darken-1': '#A8833F',
    secondary: '#1E3A2B',
    accent: '#E6D2A8',
    muted: '#8DA094',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'on-background': '#E2E8F0',
    'on-surface': '#E2E8F0',
    'on-primary': '#0B130E',
    'on-secondary': '#E2E8F0'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'ikammDarkTheme',
    themes: {
      ikammDarkTheme
    }
  }
})
