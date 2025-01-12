<div className="mt-40 lg:mt-44 lg:py-20 lg:px-20 px-4">
  <p className="text-dark-blue g:text-2xl font-bold pb-3">
    Your Cart (2 items)
  </p>
  <div className="flex lg:flex-row flex-col justify-between lg:gap-3">
    <div className=" bg-gray-100 h-full shadow-lg rounded-xl ">
      {/* Table Header */}
      <div className="grid grid-cols-10 gap-4 border-b pb-4 font-semibold text-gray-700 p-3 items-center">
        <span className="col-span-4">Product</span>
        <span className="col-span-2">Unit Price</span>
        <span className="col-span-2">Total</span>

        <span className="col-span-2"> Remove</span>
      </div>

      {/* Product Rows */}
      {products.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-10 max-w-4xl gap-4 items-center border-b py-4 px-6 bg-white "
        >
          {/* Product Image and Name */}
          <div className="flex items-center space-x-4 col-span-4">
            <div>
              <div className="flex gap-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-md bg-gray-100 border border-gray-50"
                />
                <div>
                  <p className="text-gray-700 font-extrabold">{product.name}</p>
                  <p className=" text-primary-bg text-sm font-bold bg-[#E7F3E633] p-1 px-1.5">
                    {product.painter}
                  </p>
                </div>
              </div>
              {/* Quantity */}
              <p className="text-text-light pt-2 pb-2">Quantity</p>
              <div className="flex items-center justify-between space-x-2 border rounded-full p-2 px-3 w-44">
                <button className="w-7 h-7 border-[0.4px] border-gray-400   bg-gray-200 rounded-full hover:bg-gray-300 ">
                  -
                </button>
                <span>{product.quantity}</span>
                <button className="w-7 h-7 rounded-full border-[0.4px] border-primary-bg  hover:bg-gray-300">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Unit Price */}
          <span className="text-text-light col-span-2">
            {product.unitPrice}
          </span>
          {/* Total */}
          <span className="text-gray-700 col-span-2 font-bold">
            {product.total}
          </span>

          {/* Remove Button */}
          <button className="text-red-500 w-24 py-1 rounded-full border-[0.1px] bg-[#F5F6F7] text-sm ">
            Remove
          </button>
        </div>
      ))}

      <div className="bg-white py-5 px-5 flex justify-between">
        <button className="flex items-center justify-center bg-primary-bg text-white p-2.5  px-7 gap-3 rounded-full">
          <RiShoppingCart2Fill size={20} className="mb-1" /> Add More Items
        </button>
        <button className="flex items-center justify-center bg-[#F5F6F7] text-red-500 p-2.5 px-7 gap-3  border rounded-full">
          <RiDeleteBin5Fill size={20} className="mb-1" /> Remove All
        </button>
      </div>
    </div>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-100 self-start">
      <h2 className="text-xl font-semibold mb-4 text-text-light flex justify-between tracking-tight">
        Subtotal: <span className="text-black">£3.00</span>
      </h2>

      {/* {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span className="text-gray-700">{item.price}</span>
          <button className="text-red-500 hover:underline text-sm">
            Remove
          </button>
        </div>
      ))} */}

      <h2 className="text-sm text-text-light font-semibold mt-4 flex justify-between">
        Subtotal: <span className="text-black text-base">0.7 kg</span>
      </h2>
      <p className="text-sm  mt-2 text-text-light">
        Delivery fee and other bills will be calculated at checkout
      </p>

      <div className="mt-4 ">
        <label className="flex  space-x-2 pr-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-primary-bg"
            checked={agreeToPolicy}
            onChange={handleCheckboxChange}
          />
          <span className="text-sm text-gray-700">
            I have read the instruction above and I agree to
            <a href="#" className="text-primary-bg">
              {" "}
              JENARI’s Return
            </a>
            Policy
          </span>
        </label>
      </div>

      <button
        className={`w-full mt-6 py-2 px-4 text-white font-semibold rounded-full ${
          agreeToPolicy
            ? "bg-primary-bg hover:opacity-80"
            : "bg-primary-bg cursor-not-allowed"
        }`}
        disabled={!agreeToPolicy}
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
  <div className="mt-12 h-full w-full">
    <h3 className="text-xl tracking-tighter">Don’t forget to add these</h3>
    <Carousel
      items={categories}
      slidesPerView={3}
      spaceBetween={20}
      onSwiperRef={(swiper) => {
        swiperRef.current = swiper;
      }}
    />
  </div>
</div>;
