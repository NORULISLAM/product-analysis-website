import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review'

const Home = () => {
    const [Review, setReview] = useReview();
    console.log(Review);
    return (
        <div>


            <div className="d-flex p-2 m-4 bd-highlight">
                <div className='mx-4'>
                    <h1 className='fw-bold'>Your next MacBook</h1>
                    <h1 className='text-info fw-bold'>Your best LapTop</h1>
                    <p>
                        New MacBook Air to Launch in the Second Half of 2022 With M2 Chip and a New Design. Apple is gearing up to launch a new version of its MacBook Air later this year. The new MacBook Air will potentially feature an updated design with slimmer bezels along with upgraded internals{Review.length} <span><small>2 days ago</small></span></p>
                    <button type="button" className="btn btn-light mx-auto">Live demo</button>

                </div>
                <div className=''>
                    <img src="https://images.macrumors.com/t/rWl5IHswJZlYDz3b4aYIA4KL8jo=/800x0/smart/article-new/2013/09/macbook_air_trio_transparent.png?lossy" className="rounded mx-auto" alt="" />
                </div>
            </div>
            <div>
                <h1 className="text-center">Customer Reviews(3)</h1>
                {/* {
                    Review.map(review => <div>
                        <h3>{review.name}</h3>
                        <img src={review.img} alt="" />
                    </div>)
                } */}
                <Review
                    key={Review.id}
                    Review={Review}
                ></Review>

                {
                    Review.slice(0, 3).map(review =>

                        <div className="card-body">
                            <img src={review.img} alt="" />
                            <h5 className="card-title">Card title{review.name}</h5>

                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>)
                }

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="button">See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;