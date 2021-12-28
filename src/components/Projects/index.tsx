import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItemHome from './ProjectItemHome';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjectItemHome
          img="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjectItemHome
          img="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          title="Projeto 02"
          type="Aplicativo"
          slug="teste"
        />
        <ProjectItemHome
          img="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          title="Projeto 03"
          type="Backend"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
