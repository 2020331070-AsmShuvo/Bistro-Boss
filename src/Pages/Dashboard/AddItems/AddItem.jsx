import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddItem = () => {
  const axiosSecure = useAxiosSecure();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const recipe = form.recipe.value;
    const price = form.price.value;
    const category = form.category.value;
    const image = form.image.value;
    const newItem = {
      name,
      recipe,
      category,
      price,
      image,
    };
    console.log(newItem);
    axiosSecure.post("/menu", newItem).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire("Item added succesfully");
      }
    });
  };

  return (
    <div className="">
      <div className="w-1/2 mx-auto min-h-screen ">
        <div className="flex rounded-2xl flex-col lg:flex-row  shadow-lg shadow-blue-900">
          <div className="card shrink-0 w-full shadow-2xl bg-base-100 rounded-none rounded-r-2xl">
            <form
              onSubmit={handleLogin}
              className="card-body bg-blue-500 w-full"
            >
              <div className="form-control ">
                <p className="text-xl text-gray-200 font-semibold mb-2 px-4">
                  ADD ITEM
                </p>

                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="price"
                  type="number"
                  placeholder="U$D Price"
                  className="input"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="image"
                  type="text"
                  placeholder="URL Image"
                  className="input"
                  required
                />
              </div>
              <div className="form-control">
                <select name="category" className="input" required>
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  <option value="dessert">Dessert</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                </select>
              </div>
              <div className="form-control">
                <textarea
                  name="recipe"
                  type="text"
                  placeholder="Recipe"
                  className="input h-56"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-success text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
