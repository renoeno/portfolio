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
        <Heading size="md" decoration="italic">
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
