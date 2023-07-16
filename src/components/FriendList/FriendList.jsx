import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendUl } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendUl>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)
      })}
    </FriendUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};