import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category == "popular");
  return (
    <div className="my-10">
      <section>
        <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
      </section>
      <div className="grid gap-4 md:grid-cols-2 mx-10">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center my-5">
        <button className="btn btn-sm btn-outline border-0 mx-auto border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
