import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useEffect, useState } from "react";
import {userRequest} from "../../request";
const Featured = () => {
  const [income,setIncome]=useState([]);
  const [perc,setPerc]=useState(0);
  useEffect(()=>{
    const getIncome= async()=>{
      try {
        const res = await userRequest.get("orders/income");
        console.log(res.data)
        setIncome(res.data);
        setPerc((res.data[1].total*100)/res.data[0].total-100)
      } catch {
      
      }
    }
    getIncome();
  },[]);
 
  // Math.floor(perc)
  // {income[0].total+income[1].total}
  // text={`${Math.floor(perc)}%`
  // {income[0].total}
  // {income[1].total}
 
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <CircularProgressbar value={80} text="80%" strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$45k</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$50k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle" >This Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$20k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$10k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
