import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<string | null>(null)
  const [isSystemDark, setIsSystemDark] = useState(false)

  // Detectar si el sistema está en modo oscuro
  const checkSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'system') {
      // Si el tema es "sistema", verificamos el tema actual del sistema
      const systemPrefersDark = checkSystemTheme()
      setIsSystemDark(systemPrefersDark)
      setTheme('system')
      document.documentElement.classList.toggle('dark', systemPrefersDark)
    } else if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      setTheme('light') // Valor por defecto
    }

    // Listener para los cambios en el esquema de color del sistema
    const systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)')
    systemThemeListener.addEventListener('change', (e) => {
      if (theme === 'system') {
        const systemDark = e.matches
        setIsSystemDark(systemDark)
        document.documentElement.classList.toggle('dark', systemDark)
      }
    })

    return () => {
      systemThemeListener.removeEventListener('change', () => {})
    }
  }, [theme])

  const switchTheme = (newTheme: string) => {
    if (newTheme === 'system') {
      const systemPrefersDark = checkSystemTheme()
      setIsSystemDark(systemPrefersDark)
      document.documentElement.classList.toggle('dark', systemPrefersDark)
    } else {
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return { theme, isSystemDark, switchTheme }
}
