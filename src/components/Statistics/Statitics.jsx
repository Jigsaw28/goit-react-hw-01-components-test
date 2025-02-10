import { ItemStatistics, ListStatistics, PercentageStatistics, StatWrapper, Title } from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
  return (
    <StatWrapper className="statistics">
      {title && <Title className="title">{title}</Title>}
      <ListStatistics className="stat-list">
        {stats.map(stat => (
          <ItemStatistics className="item" key={stat.id} label ={stat.label}>
                <span className="label">{stat.label}</span>
                <PercentageStatistics className="percentage">{stat.percentage}</PercentageStatistics>
            </ItemStatistics>
        ))}
      </ListStatistics>
    </StatWrapper>
  );
};

