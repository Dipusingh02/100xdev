import React from "react";
import RevenueCard from "./components/RevenueCard";

const App = () => {
  return (
    
    <div className="grid grid-cols-3 gap-5 p-4">
<RevenueCard title = "Next Payout" showWarning = {true} orderCount = {5} amount = {"2,312.22"} />    
<RevenueCard className="bg-cyan-400" title = "Amount Pending" showWarning = {true} orderCount = {5} amount = {"92,312.20"} />    
<RevenueCard title = "Amount Pending" showWarning = {true}  amount = {"23,92,312.19"} />    

    </div>
  );
};

export default App;
