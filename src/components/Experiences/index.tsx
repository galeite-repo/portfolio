import SectionTitle from '../SectionTitle';
import ExpecienceItem from './ExpecienceItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="10 anos" description="de expeciencia" />

      <section>
        <ExpecienceItem
          year="2021"
          title="Application Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ExpecienceItem
          year="2021"
          title="Application Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ExpecienceItem
          year="2021"
          title="Application Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ExpecienceItem
          year="2021"
          title="Application Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </section>
    </Container>
  );
}

export default Experiences;
