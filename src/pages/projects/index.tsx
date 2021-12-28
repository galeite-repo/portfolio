import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        />

        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
      </main>
    </ProjectsContainer>
  );
}
