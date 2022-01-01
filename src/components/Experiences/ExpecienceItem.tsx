import { ItemContainer } from './styles';

interface ExpecienceItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}
export default function ExpecienceItem({
  year,
  title,
  description,
  company
}: ExpecienceItemProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <div className="title">
          <span>{company} </span>
          <h1>{year}</h1>
        </div>
        <h2>{title}</h2>

        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
