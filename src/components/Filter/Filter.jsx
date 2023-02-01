import { FilterLabel, FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ filterValue, onSearch }) => {
  return (
    <FilterLabel>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        value={filterValue}
        name="filter"
        onChange={onSearch}
      />
    </FilterLabel>
  );
};
