import { GetStaticProps } from 'next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';
import FormContact from '../components/FormContact';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Knowledge from '../components/Knowledge';
import Projects from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';
import ProjectsApi from './api/projects';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface HomeProps {
  projects: IProject[];
}
export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <Knowledge />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => ProjectsApi();
