import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
    const [reviews, setReviews] = useState(movie.reviews);
    const handleAddReview = newReview => {
    setReviews([...reviews, newReview]); 
    };
    
    function handleDeleteReview(id) {
        setReviews(reviews.filter(review => review.id !== id));
    }

    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} width="300px" />
            <p>{movie.synopsis}</p>
            <h4>Starring</h4>
            <p>{movie.starring}</p>
            <h4>Rating: {movie.rating}</h4>
            {}
            <ReviewList reviews={reviews} onDelete={handleDeleteReview} />
            {}
            <ReviewForm onAddReview={handleAddReview} />
        </div>
    );
};

export default Movie;
