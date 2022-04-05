
import React from 'react';
import useReview from '../../hooks/useReview';

const Review = () => {
    const [Review, setReview] = useReview();
    return (
        <div>
            {
                Review.map(review =>

                    <div className="card-body">
                        <img src={review.img} alt="" />
                        <h5 className="card-title">{review.name}</h5>

                        <p className="card-text">{review.comment}</p>
                        <h5>Rating: {review.ratings}</h5>
                    </div>)
            }
        </div>
    );
};


export default Review;