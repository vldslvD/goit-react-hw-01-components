import PropTypes from 'prop-types';
import { FriendLi, Circle } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline}) => {
  const styleActive = {
        backgroundColor: "#33ff58"
  }
  return (
    <FriendLi>
      <Circle style={isOnline?styleActive:null}></Circle>
  <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
</FriendLi>
  );
};

FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
}