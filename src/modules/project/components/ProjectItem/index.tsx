import Image from 'next/legacy/image';
import { ProjectProps } from '../../../../types';
import { Heading } from '../../../homePage/components/Heading';
import {
  ImageContainer,
  ProjectWrapper,
  Description,
  LinkContainer,
  ProjectLink,
  TitleContainer,
  Title,
  Tag,
  InfoContainer,
} from './styles';

type ProjectItemProps = {
  project: ProjectProps;
};

export function ProjectItem({ project }: ProjectItemProps) {
  const projectTags = project.tags.split(',').map((tag, i) => (
    <Tag>
      {tag} {i < project.tags.split(',').length - 1 ? '|' : ''}
    </Tag>
  ));

  return (
    <ProjectWrapper>
      <InfoContainer>
        <TitleContainer>
          <Title>
            <Heading decoration="italic" size="sm">
              {project.title}
            </Heading>
          </Title>
          {projectTags}
        </TitleContainer>

        <LinkContainer>
          <ProjectLink href={project.projectUrl}>{project.projectUrl}</ProjectLink>
        </LinkContainer>
      </InfoContainer>
      <Description>{project.description}</Description>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <ImageContainer>
          <Image
            src={project.image[0].url}
            alt=""
            title=""
            sizes="100%"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
      </div>
    </ProjectWrapper>
  );
}
