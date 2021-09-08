import React from 'react';

interface Props {
  people: Person[];
}

export const PeopleTable: React.FC<Props> = (props) => {
  const { people } = props;
  const tableHead: string[] = Object.keys(people[0]) as (keyof Person)[];

  return (
    <table>
      <thead>
        <tr>
          {tableHead.map(item => (
            <th key={item}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {people.map(person => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>{person.fatherName}</td>
            <td>{person.motherName}</td>
            <td>{person.slug}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
