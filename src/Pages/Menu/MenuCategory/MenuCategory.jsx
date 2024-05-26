import { Link } from "react-router-dom";
import Paralux from "../../../Components/Paralux/Paralux";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, image, title, desc }) => {
  // console.log(title);
  return (
    <div>
      {image && <Paralux image={image} title={title} desc={desc} />}
      <div className="grid gap-4 md:grid-cols-2 md:mx-10 lg:mx-28 my-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link className="mx-auto" to={`/order/${title}`}>
        <div className="text-center mb-10">
          <button className="btn  btn-sm btn-outline border-0 mx-auto border-b-4">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
