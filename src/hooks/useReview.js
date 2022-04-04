import { useEffect, useState } from "react"

const useReview = () => {
    const [Review, setReview] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
    return [Review, setReview];
}

export default useReview;