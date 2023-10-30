import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function MyPurchases({ marketplace, pepe, account }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadMarketplaceItems = async () => {
    const filter = marketplace.filters.Bought(
      null,
      null,
      null,
      null,
      null,
      account
    );
    let itemsFilter = await marketplace.queryFilter(filter);
    for (let i = 0; i < itemsFilter.length; i++) {
      const item = itemsFilter[i].args;
      // get uri url from nft contract
      const uri = await pepe.tokenURI(item.tokenId);
      // use uri to fetch the nft metadata stored on ipfs
      const response = await fetch(uri);
      const metadata = await response.json();

      // get total price of item (item price + fee)
      const totalPrice = await marketplace.getTotalPrice(item.itemId);
      // add item to items array

      items.push({
        totalPrice,
        itemId: item.itemId,
        seller: item.seller,
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
      });
    }
    setLoading(false);
    setItems(items);
  };

  useEffect(() => {
    loadMarketplaceItems();
  }, []); // componentDidMount

  if (loading) {
    return (
      <div className="flex justify-center mt-4">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {items.map(({ totalPrice, itemId, name, image }) => (
        <div
          key={itemId}
          className="card card-compact w-96 bg-[#202020] shadow-xl p-2"
        >
          <figure>
            <img className="w-1/4" src={image} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="card-actions font-bold justify-end">
              <span className="btn text-lg">
                {ethers.utils.formatEther(totalPrice)} ETH
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
