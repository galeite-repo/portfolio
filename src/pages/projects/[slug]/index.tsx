import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BannerProjectDetail from '../../../components/BannerProjectDetail';
import Header from '../../../components/Header';
import LoadingPage from '../../../components/LoadingPage';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectById } from '../../../services/projects';
import { ProjectDetailContainer } from '../../../styles/ProjectDetailStyles';

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
      <Head>
        <title> {project.title} | Gabriel Leite</title>

        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>
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
