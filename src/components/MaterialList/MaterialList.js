import { MaterialCard } from '../MaterialCard/MaterialCard';
import * as S from './MaterialCard.styled';
import { Box } from '../Box';

export const MaterialList = ({ materials, ...methods }) => {
  return (
    <Box as="ul" mt={4}>
      {materials.map(({ id, title, link }) => (
        <S.MaterialItem key={id}>
          <MaterialCard
            id={id}
            title={title}
            link={link}
            key={id}
            {...methods}
          />
        </S.MaterialItem>
      ))}
    </Box>
  );
};
