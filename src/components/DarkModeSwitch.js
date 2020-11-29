import { useColorMode, Switch, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'blue.600', dark: 'yellow.300' };

  const handleOnclick = () => {
    toggleColorMode();
  };
  return (
    <IconButton
      aria-label='Toggle dark mode'
      variant='ghost'
      color={bgColor[colorMode]}
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={handleOnclick}
      size='lg'
    />

    // og switch
    // <Switch
    //   position="relative"
    //   color="blue"
    //   isChecked={isDark}
    //   onChange={toggleColorMode}
    // />
  );
};
