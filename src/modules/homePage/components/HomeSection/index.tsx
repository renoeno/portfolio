import { Heading } from '../Heading';
import { HomeSubtitle } from '../HomeSubtitle';
import { Navigation } from '../Navigation';
import { HomeTitleWrapper, TitleContainer, FirstNameContainer, LastNameContainer } from './styles';

export function HomeTitle() {
  return (
    <>
      <HomeTitleWrapper>
        <HomeSubtitle />
        <TitleContainer>
          <FirstNameContainer css={{ animationDelay: '0.125s' }}>
            <Heading size={{ '@initial': 'xl', '@bp3': 'lg' }}>reno</Heading>
          </FirstNameContainer>
          <LastNameContainer css={{ animationDelay: '0.25s' }}>
            <Heading size={{ '@initial': 'xl', '@bp3': 'lg' }}>almeida</Heading>
          </LastNameContainer>
        </TitleContainer>
        <Navigation />
      </HomeTitleWrapper>
    </>
  );
}
