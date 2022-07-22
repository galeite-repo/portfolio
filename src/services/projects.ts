import Prismic from '@prismicio/client';
import { getPrismicClient } from './prismic';

export default async function ProjectsApi() {
  const prismic = getPrismicClient();

  const personResponse = await prismic.queryFirst(
    [Prismic.predicates.at('document.type', 'person')],
    { orderings: '[document.first_publication_date desc]' }
  );
  const person = personResponse.data;

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

  const experiencesResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'experiences')],
    { orderings: '[document.first_publication_date desc]' }
  );
  const experiences = experiencesResponse.results.map(experience => ({
    year: experience.data.year,
    title: experience.data.title,
    company: experience.data.company,
    description: experience.data.description
  }));

  return {
    props: { projects, person, experiences },
    revalidate: 300 // 5min
    
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
    revalidate: 300 // 5min
  };
}
