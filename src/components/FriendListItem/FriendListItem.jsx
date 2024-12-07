import css from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.username}>{name}</p>
      <p className={isOnline ? css.statusonline : css.statusoffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
