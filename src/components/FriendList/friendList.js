import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ title, friends }) => {
  return (
    <section className={css.friendListBox}>
      {title !== undefined && (
        <h2 className={css.title}>{title}'s friend list:</h2>
      )}
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            {friend.isOnline ? (
              <span className={css.online}></span>
            ) : (
              <span className={css.offline}></span>
            )}
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.array.isRequired,
};
