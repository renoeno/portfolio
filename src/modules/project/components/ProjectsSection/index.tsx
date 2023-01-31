import { ProjectProps } from '../../../../types';
import { ProjectItem } from '../ProjectItem';
import { ProjectWrapper } from './styles';

type ProjectsSectionProps = {
  projects: ProjectProps[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const projectsList = projects.map((project) => (
    <li key={project.id}>
      <ProjectItem project={project} />
    </li>
  ));

  return (
    <ProjectWrapper id="projects-section">
      <ul>{projectsList}</ul>
    </ProjectWrapper>
  );
}
