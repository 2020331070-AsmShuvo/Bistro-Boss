import React, { useEffect, useState } from "react";
import orderCOver from "../../../assets/shop/banner2.jpg";
import PageCover from "../../../Components/Cover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  useEffect(() => {
    document.title = "Bistro Boss | Order";
  }, []);
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  // console.log(category);
  const initialIndex = categories.indexOf(category);
  // console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu?.filter((item) => item.category == "dessert");
  const pizza = menu?.filter((item) => item.category == "pizza");
  const soup = menu?.filter((item) => item.category == "soup");
  const salad = menu?.filter((item) => item.category == "salad");
  const offered = menu?.filter((item) => item.category == "offered");
  const drinks = menu?.filter((item) => item.category == "drinks");
  return (
    <div>
      <PageCover
        image={orderCOver}
        title="OUR SHOP"
        desc="WOULD YOU LIKE TO TRY A DISH"
      />
      <div className="my-20">
        <Tabs
          className="mx-20"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSERT</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={offered} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
