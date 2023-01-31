import { Heading } from '../../../homePage/components/Heading';
import {
  AboutWrapper,
  Description,
  ImageContainer,
  TitleContainer,
  Icons,
  DescriptionContainer,
  ContactLink,
} from './styles';
import { AboutProps } from '../../../../types';
import Image from 'next/image';
import { GithubLogo, LinkedinLogo, At, InstagramLogo } from 'phosphor-react';

type AboutSectionProps = {
  about: AboutProps;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <AboutWrapper id="about-section">
      <TitleContainer>
        <Heading decoration="italic" size="sm">
          Quem é Reno
        </Heading>
      </TitleContainer>
      <div
        style={{
          display: 'flex',
        }}
      >
        <DescriptionContainer>
          <Description>{about.aboutMe}</Description>
          <Icons>
            <ContactLink href="https://www.linkedin.com/in/renoalmeida/" target="_blank">
              <LinkedinLogo size={36} />
            </ContactLink>
            <ContactLink href="https://github.com/renoeno" target="_blank">
              <GithubLogo size={36} />
            </ContactLink>
            <ContactLink href="mailto:renoalm@gmail.com">
              <At size={36} />
            </ContactLink>
            <ContactLink href="http://instagram.com/renoenoenoeno" target="_blank">
              <InstagramLogo size={36} />
            </ContactLink>
          </Icons>
        </DescriptionContainer>

        <ImageContainer>
          <Image
            src={about.aboutMePicture[0].url}
            alt=""
            title=""
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
      </div>
    </AboutWrapper>
  );
}
