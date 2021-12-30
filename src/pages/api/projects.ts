import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

export default async function ProjectsApi() {
  const prismic = getPrismicClient();
  const projectResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'projetos')],
    { orderings: '[document.first_publication_date desc]' }
  );
  const projects = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: { projects },
    revalidate: 86400 // 24horas
  };
}

export async function ProjectById(id: string) {
  const prismic = getPrismicClient();
  const projectResponse = await prismic.getByUID('projetos', String(id), {});
  const project = {
    slug: projectResponse.uid,
    title: projectResponse.data.title,
    type: projectResponse.data.type,
    description: projectResponse.data.description,
    link: projectResponse.data.link.url,
    thumbnail: projectResponse.data.thumbnail.url
  };

  return {
    props: { project },
    revalidate: 86400 // 24horas
  };
}
