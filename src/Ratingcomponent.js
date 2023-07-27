
import React from 'react';
import { connect } from 'react-redux';
import { setRating } from './actions';

const RatingComponent = ({ rating, setRating }) => {
  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h2>Rating: {rating}/5</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer' }}
          onClick={() => handleRatingChange(star)}
        >
          {star} {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  rating: state.rating,
});

const mapDispatchToProps = {
  setRating,
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingComponent);
