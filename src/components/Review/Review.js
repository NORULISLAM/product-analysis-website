import React from 'react';
import useReview from '../../hooks/useReview'
const Review = () => {
    const { Review, setReview } = useReview();
    console.log(Review);
    // const { name, picture, price } = props.Review;
    return (
        <div>
            <h1>review page: {Review.length}</h1>

        </div>
    );
};

export default Review;