import { GetStaticProps } from 'next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Head from 'next/head';
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';
import FormContact from '../components/FormContact';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Knowledge from '../components/Knowledge';
import Projects from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';
import ProjectsApi from '../services/projects';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface IPerson {
  name: string;
  surname: string;
  email: string;
  job: string;
  company: string;
}
interface IExperience {
  year: string;
  title: string;
  company: string;
  description: string;
}
interface HomeProps {
  projects: IProject[];
  experiences: IExperience[];
  person: IPerson;
}

export default function Home({ projects, person, experiences }: HomeProps) {
  console.log(process.env.SENDGRID_API_KEY)
  console.log(process.env.PRISMIC_ACCESS_TOKEN)
  useEffect(() => {
    // getPerson();
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title> Home | Gabriel Leite</title>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="description"
          content="Sou um desenvolvedor Fullstack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Fullstack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header />
      <main className="container">
        <HomeHero person={person} />
        <Experiences experiences={experiences} />
        <Projects projects={projects} />
        <Knowledge />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => ProjectsApi();
