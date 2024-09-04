import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Tooltip } from '@mui/material';

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detectar la configuración del sistema
  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme);
  }, [setTheme]);

  if (!mounted) return null; 

  const isDark = theme === 'dark';

  return (
    <div className="flex items-center">
      <Tooltip title={isDark ? "Modo Oscuro Activo" : "Modo Claro Activo"} arrow>
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="p-2 rounded-md transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDark ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>
      </Tooltip>
    </div>
  );
};

export default DarkModeToggle;
