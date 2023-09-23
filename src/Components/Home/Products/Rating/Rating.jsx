import React from 'react';
import styles from './Rating.module.css';
import StarFull from '../../../../assets/star_full.svg';
import StarEmpty from '../../../../assets/star_empty.svg';

const Rating = (props) => {
  function renderRating() {
    const ratingArray = [1, 2, 3, 4, 5];
    return ratingArray.map((rating) => (
      <img
        key={rating}
        src={rating <= props.rating ? StarFull : StarEmpty}
        alt={rating}
      />
    ));
  }

  return <div className={styles.rating}>{renderRating()}</div>;
};

export default Rating;
