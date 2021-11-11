import {
  FilterButton,
  Filters,
  StyledProjectFilter,
} from './ProjectFilter.styled';

const filters = ['all', 'mine', 'development', 'design', 'marketing', 'sales'];

const ProjectFilter = ({ currentFilter, changeFilter }) => {
  const handleClick = (filter) => {
    changeFilter(filter);
  };

  return (
    <StyledProjectFilter>
      <Filters>
        <p>Filter by:</p>
        {filters.map((f) => (
          <FilterButton
            active={currentFilter === f}
            key={f}
            onClick={() => handleClick(f)}>
            {f}
          </FilterButton>
        ))}
      </Filters>
    </StyledProjectFilter>
  );
};

export default ProjectFilter;
