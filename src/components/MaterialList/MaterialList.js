import { MaterialCard } from '../MaterialCard/MaterialCard';

export const MaterialList = ({ materials, ...methods }) => {
  return (
    <ul>
      {materials.map(({ id, title, link }) => (
        <li key={id}>
          <MaterialCard
            id={id}
            title={title}
            link={link}
            key={id}
            {...methods}
          />
        </li>
      ))}
    </ul>
  );
};
