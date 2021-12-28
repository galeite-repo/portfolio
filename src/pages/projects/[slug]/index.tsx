import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import BannerProjectDetail from '../../../components/BannerProjectDetail';
import Header from '../../../components/Header';
import LoadingPage from '../../../components/LoadingPage';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectDetailContainer } from '../../../styles/ProjectDetailStyles';
import { ProjectById } from '../../api/projects';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface ProjectDetailProps {
  project: IProject;
}
export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();
  // return <LoadingPage />;
  if (router.isFallback) {
    return <LoadingPage />;
  }
  return (
    <ProjectDetailContainer>
      <Header />
      <BannerProjectDetail
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />
      <main>
        <p>{project.description}</p>
        <button type="button">
          <a href={project.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjectDetailContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'projetos')
  ]);
  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));
  return {
    paths,
    fallback: true
  };
};
export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;
  return ProjectById(String(slug));
};
