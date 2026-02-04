

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";

const Cart = () => {

  // 🔴 MAIN FIX: redux state ka sahi path + safe default
  const cartItems = useSelector((state) => state.cart) || [];

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cartItems.reduce((acc, curr) => acc + curr.price, 0)
    );
  }, [cartItems]);

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          
          {/* LEFT SIDE - CART ITEMS */}
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cartItems.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
              
              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-green-800">
                  YOUR CART
                </div>

                <div className="font-semibold text-5xl text-green-700 mt-5">
                  SUMMARY
                </div>

                <p className="text-xl">
                  <span className="text-gray-700 font-semibold">
                    Total Items: {cartItems.length}
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">
                  <span>Total Amount: </span>${totalAmount.toFixed(2)}
                </p>

                <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
                  CheckOut Now
                </button>
              </div>

            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-semibold text-gray-700">
            YOUR CART IS EMPTY!
          </h1>
          <Link to="/">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;