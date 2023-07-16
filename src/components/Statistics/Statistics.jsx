import PropTypes from 'prop-types';
import {Container, StatsUl,  StatLi, StatNumber, StatName} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      <StatsUl>
        {stats.map(stat => {
          return (
            <StatLi key={stat.id}>
              <StatName>{stat.label}</StatName>
              <StatNumber>{stat.percentage}%</StatNumber>
            </StatLi>
          );
        })}
      </StatsUl>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
