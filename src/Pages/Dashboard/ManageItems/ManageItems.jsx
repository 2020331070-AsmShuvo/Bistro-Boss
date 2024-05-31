import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      //   console.log(result);
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((data) => {
          console.log(data, data);
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleUpdateItem = (item) => {};
  return (
    <div>
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"} />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-blue-600">${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-xm bg-red-600 text-white btn-xs"
                  >
                    Delete
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleUpdateItem(item)}
                    className="btn btn-xm bg-green-600 text-white btn-xs"
                  >
                    Update
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
