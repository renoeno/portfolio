import { MenuLink } from '../MenuLink';
import { MenuWrapper, MenuContainer } from './styles';

export const Navigation = () => {
  return (
    <MenuWrapper>
      <MenuContainer>
        <MenuLink href="#projects-section" css={{ animationDelay: '0.125s' }}>
          Projetos
        </MenuLink>
        <MenuLink href="#about-section" css={{ animationDelay: '0.25s' }}>
          Sobre
        </MenuLink>
      </MenuContainer>
    </MenuWrapper>
  );
};
