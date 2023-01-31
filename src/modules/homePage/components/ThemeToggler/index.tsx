import { SunDim, Moon } from 'phosphor-react';
import { useThemeContext } from '../../../../contexts/ThemeContext';
import { darkTheme } from '../../../../styles';
import { IconContainer, SwitchRoot, SwitchThumb } from './styles';

export function ThemeToggler() {
  const { dark, toggleTheme } = useThemeContext();

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <>
      <form>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
            <IconContainer className={dark ? darkTheme : ''}>
              {dark ? <SunDim /> : <Moon />}
            </IconContainer>
          </label>
          <SwitchRoot className={dark ? darkTheme : ''} onClick={handleToggle} id="airplane-mode">
            <SwitchThumb className={dark ? darkTheme : ''} />
          </SwitchRoot>
        </div>
      </form>
    </>
  );
}
