/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Movie from '../components/Movie';
import ImgOne from '../images/princess_bride.JPG';
import ImgTwo from '../images/stand_by_me.JPG';
import ImgThree from '../images/outsiders.JPG';
import ImgFour from '../images/ugly_dolls.JPG';
import ImgFive from '../images/inside_out.JPG';
import ImgSix from '../images/tangled.JPG';

const MovieList = () => {

    const [movies, setMovies] = useState([

        {
            id: 1,
            title: 'The Princess Bride',
            starring: 'Cary Elwes, Mandy Patinkin, Robin Wright',
            image: ImgOne,
            synopsis: "A bedridden boys grandfather reads him the story of a farm boy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
            rating: 'PG',
            reviews: [],
        },
        {
            id: 2,
            title: 'Stand byMe',
            starring: 'Wil Wheaton, River Phoenix, Corey Feldman',
            image: ImgTwo,
            synopsis: 'A writer recounts a childhood journey with his friends to find the body of a missing boy.',
            rating: 'R',
            reviews: [],
        },
        {
            id: 3,
            title: 'The Outsiders',
            starring: 'C. Thomas Howell, Matt Dillon, Ralph Macchio',
            image: ImgThree,
            synopsis: 'In a small Oklahoma town in 1964, the rivalry between two gangs, the poor Greasers and the rich Socs, heats up when one gang member accidentally kills a member of the other.',
            rating: 'PG',
            reviews: [],
        },
        {
            id: 4,
            title: 'Ugly Dolls',
            starring: 'Kelly Clarkson, Nick Jonas, Janelle Monáe',
            image: ImgFour,
            synopsis: "An animated adventure in which the free-spirited UglyDolls confront what it means to be different, struggle with a desire to be loved, and ultimately discover who you truly are is what matters most.",
            rating: 'PG',
            reviews: [],
        },
        {
            id: 5,
            title: 'Inside Out',
            starring: 'Amy Poehler, Bill Hader, Lewis Black',
            image: ImgFive,
            synopsis: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
            rating: 'PG',
            reviews: [],
        },
        {
            id: 6,
            title: 'Tangled',
            starring: 'Mandy Moore, Zachary Levi, Donna Murphy',
            image: ImgSix,
            synopsis: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
            rating: "PG",
            reviews: [],
        },
    ]);    


    return (
        <div>
            <div className="movieContainers">
                <div className="row">
                    {}
                    {movies.map(movie => (
                        <div className='col-4 m-2' key={movie.id}>
                            <Movie movie={movie} /> {}
                            {}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;


