import PersonComponent from "./PersonComponent";
import { Person } from "../data";

interface ListProps {
  people: Person[];
}

export default function List({ people }: ListProps) {
  return (
    <section>
      {people.map((person) => {
        return <PersonComponent key={person.id} person={person} />;
      })}
    </section>
  );
}
