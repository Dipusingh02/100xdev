import React from "react";

const RevenueCard = ({ title, showWarining, orderCount, amount }) => {
  return (
    <div className="bg-blue-50 rounded shadow-sm p-5 ">
      <div className="flex">{title}
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      </div>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold text-4xl">₹{amount}</div>
        {orderCount ? (
          <div className="cursor-pointer font-semibold underline">
            <div className="flex text-blue-500  ">
              <div className="flex">{orderCount} Orders</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RevenueCard;
