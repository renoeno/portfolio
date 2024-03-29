import { useThemeContext } from '../../../../contexts/ThemeContext';
import { Heading } from '../Heading';
import {
  SubtitleContainer,
  SubtitleWrapper,
  FirstQuoteSubtitleContainer,
  SecondQuoteSubtitleContainer,
} from './styles';

export function HomeSubtitle() {
  return (
    <SubtitleWrapper>
      <SubtitleContainer>
        <Heading font="subHeading" size={{ '@initial': 'md', '@bp2': 'xsm' }} decoration="italic">
          <FirstQuoteSubtitleContainer css={{ animationDelay: '0.125s' }}>
            Interseções entre
          </FirstQuoteSubtitleContainer>
          <SecondQuoteSubtitleContainer css={{ animationDelay: '0.25s' }}>
            tecnologia e design.
          </SecondQuoteSubtitleContainer>
        </Heading>
      </SubtitleContainer>
    </SubtitleWrapper>
  );
}
