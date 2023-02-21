import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../request";


const Home = () => {
  const [userstats,setUserstats]=useState([]);
const MONTHS = useMemo(()=>[
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
],[]);

useEffect(()=>{
  const getStats = async()=>{
    try {
      const res= await userRequest.get("/users/stats")
      res.data.map(item=>{
        setUserstats(prev=>[
          ...prev,
          {name:MONTHS[item._id-1],"Active Users":item.total}
        ])
      })
    } catch{
    }
  }
  getStats();
},[MONTHS])
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart 
          title="Last 2 Months (Revenue)" 
          aspect={2 / 1} 
          data={userstats}
          dataKey="Active Users"
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
