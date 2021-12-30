import { ItemContainer } from './styles';

interface ExpecienceItemProps {
  year: string;
  title: string;
  description: string;
}
export default function ExpecienceItem({
  year,
  title,
  description
}: ExpecienceItemProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
