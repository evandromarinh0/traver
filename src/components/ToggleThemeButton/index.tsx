import {lightTheme} from '../../theme';
import {useTheme} from '../../context/ThemeContext';
import {SunMedium, MoonStar} from 'lucide-react-native';

export const ToggleThemeButton = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <>
      {theme !== lightTheme ? (
        <SunMedium size={24} color={theme.colors.text} onPress={toggleTheme} />
      ) : (
        <MoonStar size={24} color={theme.colors.text} onPress={toggleTheme} />
      )}
    </>
  );
};
