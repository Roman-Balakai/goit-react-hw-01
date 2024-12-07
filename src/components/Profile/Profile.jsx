import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userprofile}>
      <div className={css.imagebox}>
        <img className={css.imgcard} src={image} alt={name} />
        <p className={css.textname}>{name}</p>
        <p className={css.textinfo}>@{tag}</p>
        <p className={css.textinfo}>{location}</p>
      </div>
      <ul className={css.orderlist}>
        <li className={css.list}>
          <span className={css.account}>Followers</span>
          <span className={css.accountinfo}>{stats.followers}</span>
        </li>
        <li className={css.list}>
          <span className={css.account}>Views</span>
          <span className={css.accountinfo}>{stats.views}</span>
        </li>
        <li className={css.list}>
          <span className={css.account}>Likes</span>
          <span className={css.accountinfo}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
