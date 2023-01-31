import { useThemeContext } from '../../../../contexts/ThemeContext';
import { darkTheme } from '../../../../styles';
import { ProjectProps } from '../../../../types';
import { ProjectItem } from '../ProjectItem';
import { ProjectWrapper } from './styles';

type ProjectsSectionProps = {
  projects: ProjectProps[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { dark } = useThemeContext();
  const projectsList = projects.map((project) => (
    <li key={project.id}>
      <ProjectItem project={project} />
    </li>
  ));

  return (
    <ProjectWrapper id="projects-section" className={dark ? darkTheme : ''}>
      <ul>{projectsList}</ul>
    </ProjectWrapper>
  );
}
