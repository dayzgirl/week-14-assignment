import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews, onDelete }) => {
    return (
    <div className="review-list">
        {reviews.map(review => (
            <Review key={review.id} review={review} onDelete={onDelete} /> 
        ))}
    </div>
    );
};

export default ReviewList;
