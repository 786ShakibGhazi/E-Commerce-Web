import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { SplOfferData } from "../../../constants";
import { useParams } from "react-router-dom";

const SpecialOffers = () => {
  const { category } = useParams(); // Get category from URL
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(SplOfferData); // Set special offer data
    console.log("Special Offer Data:", SplOfferData);
    console.log("Category from URL:", category);
  }, [category]);

  // Normalize category to lower case for comparison
  const normalizedCategory = category ? category.toLowerCase() : '';
  console.log("Normalized Category:", normalizedCategory);

  // Filter products based on the category from URL params
  const catData = data.filter((item) =>
    item.cat.toLowerCase().includes(normalizedCategory)
  );
  console.log("Filtered Data:", catData);

  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-3 gap-10">
        {catData.length > 0 ? (
          catData.map((item) => (
            <Product
              key={item._id}
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
            />
          ))
        ) : (
          <p>No special offers available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default SpecialOffers;
