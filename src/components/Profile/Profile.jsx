import { Avatar, DescriptionCard, DescriptionName, DescriptionText, ProfileCard, Stats, StatsItem, StatsLabel, StatsQuantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <DescriptionCard>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <DescriptionName className="name">{username}</DescriptionName>
        <DescriptionText className="tag">@{tag}</DescriptionText>
        <DescriptionText className="location">{location}</DescriptionText>
      </DescriptionCard>

      <Stats className="stats">
        <StatsItem>
          <StatsLabel className="label">Followers</StatsLabel>
          <StatsQuantity className="quantity">{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel className="label">Views</StatsLabel>
          <StatsQuantity className="quantity">{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel className="label">Likes</StatsLabel>
          <StatsQuantity className="quantity">{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};
