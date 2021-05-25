import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import UserNotFound from '../UserNotFound/UserNotFound';
import Repositories from './Repositories/Repositories';
import styles from './UserPage.module.css';

const UserPage = (props) => {
  const { isFetching, user } = { ...props };
  const {
    id,
    name,
    login,
    followers,
    imageUrl,
    following,
    url,
  } = { ...user };

  if (isFetching) {
    return (
      <Preloader />
    );
  }

  if (!id) {
    return (
      <UserNotFound />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <img src={imageUrl} className={styles.image} alt='user' />
        <h1 className={styles.title}>{name}</h1>
        <a className={styles.login} href={url} target='_blank' rel='noreferrer'>{login}</a>
        <div className={styles.follow}>
          <div className={styles.follow_container}>
            <span className={styles.ico_followers} />
            <span className={styles.text}>{followers} followers</span>
          </div>
          <div className={styles.follow_container}>
            <span className={styles.ico_following} />
            <span className={styles.text}>{following} following</span>
          </div>
        </div>
      </div>
      <Repositories />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userPage.user,
  isFetching: state.userPage.isFetching,
});

export default connect(mapStateToProps, null)(UserPage);
