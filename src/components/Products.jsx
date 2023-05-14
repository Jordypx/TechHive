import { RiStarSFill } from 'react-icons/ri'
import { useStateValue } from '../contexts/StateProvider';

const Products = ({ id, title, description, image, price, rating }) => {
   const [{ basket }, dispatch] = useStateValue();

   const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id:id,
            title:title,
            image: image,
            price: price,
            rating: rating,
        },
    });
   }

    return ( 
        <div className="p-9">
                <h1 className="font-semibold text-lg">
                    New Releases
                 </h1>

            <div className="headphones-container mt-3">

                 <div className="Image-cards">
                    <div className="image">
                        <img src={image} alt="" className="pt-3" />
                    </div>

                    <div className="content flex gap-11">
                        <div className="description">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div className="reviews flex gap-2">
                                <div className="stars flex">
                                 {Array(rating).fill().map((_, i) => (
                                    <RiStarSFill key={i}/>
                                 ))}
                                </div>

                                <span className="">
                                    345
                                </span>
                            </div>

                            <div className="addTocart">
                                <button onClick={addToBasket} className="">Add to Cart</button>
                            </div>
                        </div>

                        <div className="price mr-2">
                            <span className=''><strong>$</strong>{price}</span>
                        </div>
                    </div>
                 </div>


                 <div className="Image-cards">
                    <div className="image">
                        <img className='pt-5 pl-5' src="./Max.png" alt="" />
                    </div>

                    <div className="content flex gap-11">
                        <div className="description">
                            <h2>AirPods Max</h2>
                            <p>A brand new apple airpods max 2021</p>
                            <div className="reviews flex gap-2">
                            <div className="stars flex">
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                </div>

                                <span className="flex gap-2">
                                    345
                                </span>
                            </div>

                            <div className="addTocart">
                                <button className="">Add to Cart</button>
                            </div>
                        </div>

                        <div className="price mr-2">
                            <span>$250.<i>44</i></span>
                        </div>
                    </div>
                 </div>
           

            <div className="Image-cards">
                    <div className="image">
                        <img src="./My project (3).png" alt="" />
                    </div>

                    <div className="content flex gap-11">
                        <div className="description">
                            <h2>AirPods Max</h2>
                            <p>A brand new apple airpods max 2021</p>
                            <div className="reviews flex gap-2">
                            <div className="stars flex">
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                </div>

                                <span className="">
                                    345
                                </span>
                            </div>

                            <div className="addTocart">
                                <button className="">Add to Cart</button>
                            </div>
                        </div>

                        <div className="price mr-2">
                            <span>$250.<i>44</i></span>
                        </div>
                    </div>
                 </div>

                 <div className="Image-cards">
                    <div className="image">
                        <img src="./headPhones.png" alt="" />
                    </div>

                    <div className="content flex gap-11">
                        <div className="description">
                            <h2>AirPods Max</h2>
                            <p>A brand new apple airpods max 2021</p>
                            <div className="reviews flex gap-2">
                            <div className="stars flex">
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                 <RiStarSFill />
                                </div>

                                <span className="">
                                    345
                                </span>
                            </div>

                            <div className="addTocart">
                                <button className="">Add to Cart</button>
                            </div>
                        </div>

                        <div className="price mr-2">
                            <span>$250.<i>44</i></span>
                        </div>
                    </div>
                 </div>

                 </div>

            </div>

     );

     khssjjpjp
}
 
export default Products;