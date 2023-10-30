import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";
import MarketplaceAddress from "./contracstData/Marketplace-address.json";
import MarketplaceABI from "./contracstData/Marketplace.json";
import PepeAddress from "./contracstData/Pepe-address.json";
import PepeABI from "./contracstData/Pepe.json";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import MyListedItems from "./MyListedItems";
import MyPurchases from "./MyPurchases";

function App() {
  const [account, setAccount] = useState(null);
  const [marketplace, setMarketplace] = useState({});
  const [pepe, setPepe] = useState({});
  const [loading, setLoading] = useState(true);

  // Metamask Login/Connect
  const web3Handler = async () => {
    setLoading(true);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);

    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum); // FIX : 5.7.3

    // Set signer

    const signer = provider.getSigner(); // FIX : 5.7.3

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async function (accounts) {
      console.log("helllo");
      setAccount(accounts[0]);
      await web3Handler();
    });

    await loadContracts(signer);

    setLoading(false);
  };

  const loadContracts = async (signer) => {
    const marketplace = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceABI.abi,
      signer
    );
    setMarketplace(marketplace);
    const pepe = new ethers.Contract(PepeAddress.address, PepeABI.abi, signer);
    setPepe(pepe);
  };

  return (
    <BrowserRouter>
      <>
        <Navbar account={account} web3Handler={web3Handler} />

        {loading ? (
          <div className="flex flex-col items-center mt-4">
            <span className="loading loading-ring loading-lg"></span>
            <p>Await Metamask Connection...</p>
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home marketplace={marketplace} pepe={pepe} />}
            />
            <Route
              path="/create"
              element={<Create marketplace={marketplace} pepe={pepe} />}
            />
            <Route
              path="/my-listed-items"
              element={
                <MyListedItems
                  marketplace={marketplace}
                  pepe={pepe}
                  account={account}
                />
              }
            />
            <Route
              path="/my-purchases"
              element={
                <MyPurchases
                  marketplace={marketplace}
                  pepe={pepe}
                  account={account}
                />
              }
            />
          </Routes>
        )}
      </>
    </BrowserRouter>
  );
}

export default App;
