import { Container } from './styles';

interface BannerProjectDetailProps {
  title: string;
  type: string;
  imgUrl: string;
}

function BannerProjectDetail({
  title,
  type,
  imgUrl
}: BannerProjectDetailProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

export default BannerProjectDetail;
