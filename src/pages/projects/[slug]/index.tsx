import BannerProjectDetail from '../../../components/BannerProjectDetail';
import Header from '../../../components/Header';
import { ProjectDetailContainer } from '../../../styles/ProjectDetailStyles';

export default function ProjectDetail() {
  return (
    <ProjectDetailContainer>
      <Header />
      <BannerProjectDetail
        title="Projeto 01"
        type="Website"
        imgUrl="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          possimus cumque officiis temporibus dolor magnam nobis eius pariatur!
          Quod, debitis. Libero maxime fugit accusamus quibusdam quis fuga,
          tenetur repellendus cumque, at iste, rem asperiores hic voluptatum
          maiores voluptas ipsum perspiciatis porro id officia labore fugiat!
          Dolorum dignissimos ipsa porro iure ea voluptas quas ullam molestiae
          aspernatur maiores, harum, quidem obcaecati eaque. At minima explicabo
          dignissimos cupiditate iure corrupti quia similique aliquam illum,
          quibusdam, sit dolor molestias distinctio temporibus? Delectus,
          dolorum?
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectDetailContainer>
  );
}
