import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ account, web3Handler }) {
  //   const { account, web3Handler } = props;
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>Me</a>
                <ul className="p-2">
                  <li>
                    <Link to="/my-listed-items">My Listed Item</Link>
                  </li>
                  <li>
                    <Link to="/my-purchases">My Purchases</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">PepeNFT Market</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Me</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/my-listed-items">My Listed Items</Link>
                  </li>
                  <li>
                    <Link to="/my-purchases">My Purchases</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
        {account ? (
          <div className="navbar-end">
            <a
              className="btn"
              href={`https://sepolia.etherscan.io/address/${account}`}
            >
              {account.slice(0, 5) + "..." + account.slice(38, 42)}
            </a>
          </div>
        ) : (
          <div className="navbar-end">
            <a onClick={() => web3Handler()} className="btn">
              Connect to Wallet
            </a>
          </div>
        )}
      </div>
    </>
  );
}
