import { SunDim, Moon } from 'phosphor-react';
import { useThemeContext } from '../../../../contexts/ThemeContext';
import { darkTheme } from '../../../../styles';
import { IconContainer, SwitchRoot, SwitchThumb, ToggleContainer, TogglerWrapper } from './styles';

export function ThemeToggler() {
  const { dark, toggleTheme } = useThemeContext();

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <>
      <TogglerWrapper className={dark ? darkTheme : ''}>
        <ToggleContainer>
          <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 8 }}>
            <IconContainer className={dark ? darkTheme : ''}>
              {dark ? <SunDim /> : <Moon />}
            </IconContainer>
          </label>
          <SwitchRoot
            checked={dark}
            className={dark ? darkTheme : ''}
            onClick={handleToggle}
            id="airplane-mode"
          >
            <SwitchThumb className={dark ? darkTheme : ''} />
          </SwitchRoot>
        </ToggleContainer>
      </TogglerWrapper>
    </>
  );
}
