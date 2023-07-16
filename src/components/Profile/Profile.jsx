import PropTypes from 'prop-types';
import { ProfileBox, Avatar, AvatarThumb, Field, FieldName, StatsUl, StatLi, StatNumber, StatName} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileBox>
      <div>
        <AvatarThumb>
          <Avatar
          src={avatar}
          alt="User avatar"
        />
        </AvatarThumb>
        <FieldName>{username}</FieldName>
        <Field>@{tag}</Field>
        <Field>{location}</Field>
      </div>

      <StatsUl>
        <StatLi>
          <StatName>Followers</StatName>
          <StatNumber>{stats.followers}</StatNumber>
        </StatLi>
        <StatLi>
          <StatName>Views</StatName>
          <StatNumber>{stats.views}</StatNumber>
        </StatLi>
        <StatLi>
          <StatName>Likes</StatName>
          <StatNumber>{stats.likes}</StatNumber>
        </StatLi>
      </StatsUl>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
