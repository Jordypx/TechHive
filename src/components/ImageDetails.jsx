import { useStateValue } from "../contexts/StateProvider";
import InfoImage from "./InfoImage";
import Header from "./Header";

const ImageDetails = () => {
  const [{ baskets }, dispatch] = useStateValue();

  return (
    <div className="">
      <div className="top">
        <Header />
      </div>

      <div className="container">
      <div className="">
            {baskets.map((item) => (
             <div key={item.id}>
             <InfoImage
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
               description={item.description}
             />
           </div>

            ))}
          </div>
      </div>
    </div>
  );
};

export default ImageDetails;
      