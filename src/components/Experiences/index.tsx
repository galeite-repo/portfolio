import SectionTitle from '../SectionTitle';
import ExpecienceItem from './ExpecienceItem';
import { Container } from './styles';

interface IExperience {
  year: string;
  title: string;
  company: string;
  description: string;
}
interface ExperiencesProps {
  experiences: IExperience[];
}

function Experiences({ experiences }: ExperiencesProps) {
  return (
    <Container>
      <SectionTitle title="11 anos" description="de experiência" />

      <section>
        {experiences.map(experience => (
          <ExpecienceItem
            key={experience.description}
            year={experience.year}
            title={experience.title}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </section>
    </Container>
  );
}

export default Experiences;
