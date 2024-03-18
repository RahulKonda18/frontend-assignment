import { Navigate } from "react-router-dom";
import { FiPieChart } from "react-icons/fi";
import { IoPricetagsOutline, IoSettingsOutline } from "react-icons/io5";
import { LuCalendarClock, LuUsers2 } from "react-icons/lu";
import { FaRegUserCircle, FaPowerOff } from "react-icons/fa";
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Cookies from "js-cookie";
import { BsSave } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import "./index.css";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2020", 1000, 400],
  ["2021", 1170, 460],
  ["2022", 660, 1120],
  ["2023", 1030, 540],
  ["2024", 780, 120],
];

export const options = {
  title: "",
  curveType: "function",
  legend: { position: "bottom" },
};

export const datas = [
  ["Expense", "Amount in CR"],
  ["Capital", 11],
  ["Marketing", 2],
  ["Development", 2],
  ["Testing", 2],
  ["Investments", 7],
];

export const optionss = {
  title: "",
  is3D: true,
};

class Home extends Component {
  state = {
    loggedIn: true,
  };

  onClickLogout = () => {
    Cookies.remove("dashboard_token");
    this.setState({ loggedIn: false });
  };

  render() {
    if (Cookies.get("dashboard_token") === undefined) {
      return <Navigate to="/" replace={true} />;
    }
    return (
      <div className="w-screen h-screen bg-cover flex items-center justify-stretch p-10 bg-zinc-100">
        <div className="specific bg-black h-full basis-1/5 rounded-3xl flex flex-col justify-start p-10 drop-shadow-2xl">
          <h1 className="text-6xl text-white font-medium mb-10">Board.</h1>
          <div className="flex mb-3 cursor-pointer text-black bg-white rounded-xl p-3 hover:text-black transition ease-in-out delay-150 hover:-tranzinc-y-1 hover:scale-110">
            <FiPieChart className=" text-3xl mr-4" />
            <p className="text-2xl  font-medium">Dashboard</p>
          </div>
          <div className="flex mb-3 cursor-pointer text-zinc-100 hover:bg-white rounded-xl p-3 hover:text-black">
            <IoPricetagsOutline className=" text-3xl mr-4 " />
            <p className="text-2xl  font-small ">Transactions</p>
          </div>
          <div className="flex mb-3 cursor-pointer text-zinc-100 hover:bg-white rounded-xl p-3 hover:text-black">
            <LuCalendarClock className=" text-3xl mr-4 " />
            <p className="text-2xl  font-small ">Schedules</p>
          </div>
          <div className="flex mb-3 cursor-pointer text-zinc-100 hover:bg-white rounded-xl p-3 hover:text-black">
            <FaRegUserCircle className=" text-3xl mr-4 " />
            <p className="text-2xl  font-small ">Users</p>
          </div>
          <div className="flex mb-3 cursor-pointer text-zinc-100 hover:bg-white rounded-xl p-3 hover:text-black">
            <IoSettingsOutline className=" text-3xl mr-4 " />
            <p className="text-2xl  font-small ">Settings</p>
          </div>
        </div>
        <div className="flex flex-col justify-start basis-4/5 bg-zic-100 h-full w-full ml-10 rounded-3xl p-10">
          <div className="flex w-full h-12 mb-10">
            <h1 className="text-black text-4xl font-bold drop-shadow-2xl">
              Dashboard.
            </h1>
            <input
              type="text"
              className="pl-3 bg-white text-black w-full mr-10 ml-10 rounded-xl outline-0 drop-shadow-2xl cursor-pointer hover:-translate-y-1 hover:scale-100"
              placeholder="Search"
            />
            <div
              className="text-black cursor-pointer hover:bg-black hover:text-white flex justify-center items-center p-5 rounded-xl drop-shadow-2xl cursor-pointer hover:-translate-y-1 hover:scale-110"
              onClick={this.onClickLogout}
            >
              <h1 className="font-medium text-2xl mr-3">Logout</h1>
              <FaPowerOff className="text-2xl mr-4 " />
            </div>
          </div>
          <div className="flex flex-row justify-between mb-10">
            <div className="flex flex-col bg-green-200 p-5 rounded-xl w-1/5 drop-shadow-2xl cursor-pointer hover:-translate-y-1 hover:scale-110">
              <div className="flex justify-end">
                <BsSave className="text-black text-3xl font-medium" />
              </div>
              <p className="text-xl">Total Revenues</p>
              <h1 className="text-3xl font-bold">₹21,29,430</h1>
            </div>
            <div className="flex flex-col bg-orange-200 p-5 rounded-xl w-1/5 drop-shadow-2xl cursor-pointer hover:-translate-y-1 hover:scale-110">
              <div className="flex justify-end">
                <IoPricetagsOutline className="text-black text-3xl font-medium" />
              </div>
              <p className="text-xl">Total Transactions</p>
              <h1 className="text-3xl font-bold">12560</h1>
            </div>
            <div className="flex flex-col bg-fuchsia-200	 p-5 rounded-xl w-1/5 drop-shadow-2xl cursor-pointer hover:-translate-y-1 hover:scale-110">
              <div className="flex justify-end">
                <BiLike className="text-black text-3xl font-medium" />
              </div>
              <p className="text-xl">Total Likes</p>
              <h1 className="text-3xl font-bold">1296</h1>
            </div>
            <div className="flex flex-col bg-purple-300 p-5 rounded-xl w-1/5 drop-shadow-2xl cursor-pointer hover:-translate-y-1 hover:scale-110">
              <div className="flex justify-end">
                <LuUsers2 className="text-black text-3xl font-medium" />
              </div>
              <p className="text-xl">Total Users</p>
              <h1 className="text-3xl font-bold">830</h1>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="bg-white rounded-3xl w-6/12 h-full mt-5 p-10 drop-shadow-2xl">
              <h1 className="text-black font-bold text-3xl">Performance</h1>
              <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
            </div>
            <div className="bg-white rounded-3xl w-5/12 h-full mt-5 p-10 drop-shadow-2xl">
              <h1 className="text-black font-bold text-3xl">Expenses</h1>
              <Chart
                chartType="PieChart"
                data={datas}
                options={optionss}
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
