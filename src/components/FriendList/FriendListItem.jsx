import { FriendStatus, ListItem } from "./FriendList.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem className="item">
      <FriendStatus className="status">{isOnline}</FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};
