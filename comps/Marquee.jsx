import styles from "../styles/Marquee.module.css";
import Products from "../app/Products";
import { memo } from "react";

const Marquee = ({ products }) => {
  console.log("marquee");
  return (
    <div className=" mt-20">
      <h1 className=" text-center text-secondary text-xl font-extrabold">
        You may also like
      </h1>

      <section className="mt-10 h-52 sm:h-96 w-full">
        <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-lightDim gap-5 pb-4" 
             style={{ direction: 'rtl' }}>
          {products.map((product) => (
            <div key={product._id} style={{ direction: 'ltr' }}>
              <Products products={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Marquee);
