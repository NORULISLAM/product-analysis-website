
import React from 'react';
import useReview from '../../hooks/useReview';

const Review = (props) => {
    console.log(props);
    const [Review, setReview] = useReview();
    console.log(Review);
    return (
        <div>
            {
                Review.map(review =>

                    <div className="card-body">
                        <img src={review.img} alt="" />
                        <h5 className="card-title">Card title{review.name}</h5>

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>)
            }
        </div>
    );
};


export default Review;