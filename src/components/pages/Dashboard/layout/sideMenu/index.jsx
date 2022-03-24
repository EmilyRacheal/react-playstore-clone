import React from "react";
import "./sideMenu.css";
import { Link } from "react-router-dom";

const links = [
  { name: "Accounts" },
  { name: "Payment Methods" },
  { name: "My subscriptions" },
  { name: "Redeem" },
  { name: "My whilist" },
  { name: "My plan activity" },
  { name: "Parent guide" },
];

function index() {
  return (
    <div className="border parent navBox">
      <div className="topBg">
        <ul className="px-10 text-xl menuList1">
          <li className="my-3">
            <Link to="/dashboard/apps"> My apps</Link>
          </li>
          <li className="my-3">
            <Link to="/dashboard/shops">Shop</Link>
          </li>
        </ul>

        <div className="mx-10 rule"></div>

        <ul className="px-10 py-4 menuList">
          <li>
            <Link to="/dashboard/games">Games</Link>
          </li>
          <li>
            <Link to="/dashboard/kids">Kids</Link>
          </li>
          <li>
            <Link to="/dashboard/editor">Editor's choice</Link>
          </li>
        </ul>
      </div>

      <div className="btmBg">
        <ul className="px-5 py-3 nav2">
          {links.map((item, i) => {
            return <li className="py-1">{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default index;
