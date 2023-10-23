import React, { useEffect, useState } from "react";

export default function Home({ marketplace, pepe }) {
  console.log(marketplace);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadMarketplaceItems = async () => {
    const itemCount = await marketplace.itemCount();
    let items = [];
    for (let i = 0; i < itemCount; i++) {
      const items = await marketplace.items(i);
      if (!items.sold) {
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

  return <div className="flex justify-center mt-4">Home</div>;
}
