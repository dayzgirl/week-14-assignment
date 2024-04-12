import React from 'react';

const Review = ({ review, onDelete }) => {

    let stars = "★".repeat(review.rating-1);
        
        return (
            <div className="review">
                <div className="review-header">
                    <span className="review-name">{review.name}</span>
                    <span className="review-rating"> {stars}</span>
                    <span className="review-stars">★</span>
                </div>
            
                <p className="review-comment">{review.comment}</p>

                <button onClick={() => onDelete(review.id)} className="delete-button">Delete</button>
            </div>
        );
};

export default Review;
