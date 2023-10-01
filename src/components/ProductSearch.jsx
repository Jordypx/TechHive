import { useLocation } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import products from "/products.json";
import { useStateValue } from "../contexts/StateProvider";

const ProductSearch = () => {
  const [{ basket, baskets }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  const ImageInfo = (id, title, image, price, rating, description) => {
    dispatch({
      type: "SET_SELECTED_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
    navigate("/imageInfo");
  };

  const addToBasket = (id, title, image, price, rating) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="">
      <div className="head">
        <Header />
      </div>

      <div className="headphones-container pb-9  mt-3">
        <div className="Image-cards ml-9">
          {products.map((post) => (
            <div key={post.id}>
              <div
                className="image"
                onClick={() =>
                  ImageInfo(
                    post.id,
                    post.title,
                    post.image,
                    post.price,
                    post.rating,
                    post.description
                  )
                }
              >
                <img src={post.image} alt="" className="pt-3 cursor-pointer" />
              </div>

              <div className="content flex">
                <div className="description">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="reviews flex gap-2">
                    <div className="stars flex">
                      {Array(post.rating)
                        .fill()
                        .map((_, i) => (
                          <RiStarSFill key={i} />
                        ))}
                    </div>
                    <span className="">(345)</span>
                  </div>

                  <div className="addTocart">
                    <button
                      onClick={() =>
                        addToBasket(
                          post.id,
                          post.title,
                          post.image,
                          post.price,
                          post.rating
                        )
                      }
                      className="mb-8"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="price">
                  <span className="">
                    <strong>$</strong>
                    {post.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
