import React, { useState } from 'react';
import Stars from './Stars'; 


const ReviewForm = ({ onAddReview }) => {


    const [name, setName] = useState('');
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');


    const handleSubmit = e => {
        e.preventDefault(); 


        const newReview = {
        id: Date.now(),
        name,
        rating, 
        comment
        };


        onAddReview(newReview);


        setName('');
        setRating(1);
        setComment('');
    };


    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h3>Leave a Review</h3>
            <Stars rating={rating} onChange={setRating} /> 
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)} 
                required
            />
            <br />
            <textarea
                placeholder="Your Review"
                value={comment}
                onChange={e => setComment(e.target.value)} 
                required
            ></textarea>
            <br />
            <button type="submit">Submit</button> 
        </form>
    );
};

export default ReviewForm; 