'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n';

interface ThemeSwitcherProps {
  locale: Locale;
}

export default function ThemeSwitcher({ locale }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dictionary, setDictionary] = useState<any>({
    theme: {
      light: 'Light',
      dark: 'Dark'
    }
  });

  // Load dictionary based on locale
  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(locale);
      setDictionary(dict);
    };
    loadDictionary();
  }, [locale]);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={theme === 'dark' ? dictionary.theme.light : dictionary.theme.dark}
      title={theme === 'dark' ? dictionary.theme.light : dictionary.theme.dark}
    >
      {theme === 'dark' ? (
        <FiSun className="w-4 h-4 text-yellow-500" />
      ) : (
        <FiMoon className="w-4 h-4 text-indigo-700" />
      )}
    </button>
  );
}
