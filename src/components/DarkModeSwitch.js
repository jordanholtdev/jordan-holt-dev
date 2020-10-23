import { useColorMode, Switch, IconButton } from "@chakra-ui/core";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleOnclick = () => {
    toggleColorMode();
  };
  return (
    <IconButton
      aria-label="Toggle dark mode"
      variant="outline"
      icon={colorMode === "dark" ? "sun" : "moon"}
      onClick={handleOnclick}
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
