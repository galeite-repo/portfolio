/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa1.png';

interface IPerson {
  name: string;
  surname: string;
  email: string;
  job: string;
  company: string;
}
interface HomeHeroProps {
  person: IPerson;
}

function HomeHero({ person }: HomeHeroProps) {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha Foto" />

      <div>
        <TextContainer>
          <h1>Olá,</h1>
          <h2>Bem vindo ao meu portfolio!</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Um pouco sobre mim...</span>
            <span className="purple">me</span> {'\u007B'}
            <div>
              nome: <span className="blue">"{person.name}",</span>
            </div>
            <div>
              sobrenome: <span className="blue">"{person.surname}",</span>
            </div>
            <div>
              email: <span className="blue">"{person.email}"</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className="purple">job</span> {'\u007B'}
            <div>
              empresa: <span className="blue">"{person.company}",</span>
            </div>
            <div>
              função: <span className="blue">"{person.job}"</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
