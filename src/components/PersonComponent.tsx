import { Person } from "../data";

interface PersonProps {
  person: Person;
}

export default function PersonComponent({ person }: PersonProps) {
  const { id, image, name, age } = person;

  return (
    <article className="person" key={id}>
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
}
