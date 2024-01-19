import { useThemeContext } from '../../../../contexts/ThemeContext';
import { darkTheme } from '../../../../styles';
import { Heading } from '../Heading';
import { HomeSubtitle } from '../HomeSubtitle';
import { Navigation } from '../Navigation';
import { ThemeToggler } from '../ThemeToggler';
import { HomeTitleWrapper, TitleContainer, FirstNameContainer, LastNameContainer } from './styles';

export function HomeTitle() {
  const { dark } = useThemeContext();

  return (
    <>
      <HomeTitleWrapper className={dark ? darkTheme : ''}>
        <HomeSubtitle />
        <TitleContainer>
          <FirstNameContainer css={{ animationDelay: '0.125s' }}>
            <Heading size={{ '@initial': 'xxhg', '@bp3': 'xhg', '@bp0': 'lg' }}>reno</Heading>
          </FirstNameContainer>
          <LastNameContainer css={{ animationDelay: '0.25s' }}>
            <Heading size={{ '@initial': 'xxhg', '@bp3': 'xhg', '@bp0': 'lg' }}>almeida</Heading>
          </LastNameContainer>
        </TitleContainer>
        <Navigation />
      </HomeTitleWrapper>
    </>
  );
}
