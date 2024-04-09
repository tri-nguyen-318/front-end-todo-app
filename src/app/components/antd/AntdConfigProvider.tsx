import React, { ReactNode, useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import { ThemeType } from '@/app/utils/types';

export default function AntdConfigProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeType>(ThemeType.light);

  const toggleTheme = () => {
    const newTheme = themeMode === ThemeType.light ? ThemeType.dark : ThemeType.light;
    setThemeMode(newTheme);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: themeMode === ThemeType.light ? theme.defaultAlgorithm : theme.darkAlgorithm
      }}
    >
      {children}
    </ConfigProvider>
  );
}
