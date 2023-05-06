import { RiStarSFill } from 'react-icons/ri'

const Products = () => {
    return ( 
        <div className="p-9">
                <h1 className="font-semibold text-lg">
                    Headphones For You!
                 </h1>

            <div className="headphones-container">

                 <div className="Image-cards">
                    <div className="image">
                        <img src="./assets/headPhones" alt="" className="" />
                    </div>

                    <div className="content flex">
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

                        <div className="price">
                            <span className=''>$250.<i>44</i></span>
                        </div>
                    </div>
                 </div>


                 <div className="Image-cards">
                    <div className="image">
                        
                    </div>

                    <div className="content flex">
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

                        <div className="price">
                            <span>$250.<i>44</i></span>
                        </div>
                    </div>
                 </div>
           

            <div className="Image-cards">
                    <div className="image">
                        
                    </div>

                    <div className="content flex">
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

                        <div className="price">
                            <span>$250.<i>44</i></span>
                        </div>
                    </div>
                 </div>

                 <div className="Image-cards">
                    <div className="image">
                        
                    </div>

                    <div className="content flex">
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

                        <div className="price">
                            <span>$250.<i>44</i></span>
                        </div>
                    </div>
                 </div>

                 </div>

            </div>

     );
}
 
export default Products;