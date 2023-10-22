// SPDX-License-Identifier: MIT
pragma solidity >= 0.8;

import "./Errors.sol";
import "./USDt.sol";
import "./PriceConverter.sol";
// Get funds from users
// withdraw funds
// set a minimum funding value in USD
// donate => some users => (A => 10usd, B => 20usd)
// business logic => (fundme)


contract FundMe {
    using PriceConverter for uint256;
    uint256 minUsd = 50 * 1e18;
    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;
    
    USDt public usdt = new USDt("meme");


    address public i_owner;
    /**
     * Network: Sepolia
     * Aggregator: ETH/USD
     * Address: 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
     */
    constructor() {
        i_owner = msg.sender;
    }

    function fund() public payable   {
        // want to be able set min fund amount in USD
        // 1. send ETH to this contract

        // require
        require(msg.value.getConversionRate() >= minUsd, "Didn't send enough!"); // 1e18 = 1 * 10 ** 18
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value.getConversionRate();
    }

   
    
    modifier onlyOwner { // middleware
        // require(i_owner ==  msg.sender, "Not owner");
        if (msg.sender != i_owner) revert NotOwner();
        _; //  =>>>> !important
    }

    /*
        exec func => modifier (optional) => run logic in func 
    */
    function withdraw() public onlyOwner {

        for (uint256 funderIndex = 0 ; funderIndex < funders.length; funderIndex++) 
        {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        funders = new address[](0);
        // transfer
        uint256 amount = address(this).balance;
        payable(msg.sender).transfer(amount);
        // send

        // bool isSuccess = payable(msg.sender).send(amount);
        // require(isSuccess, "Call failed");

        // call

        (bool isSuccess, ) =  payable(msg.sender).call{value: amount}("");
        require(isSuccess, "Call failed");
    }


     // Explainer from: https://solidity-by-example.org/fallback/
        // Ether is sent to contract
        //      is msg.data empty?
        //          /   \ 
        //         yes  no
        //         /     \
        //    receive()?  fallback() 
        //     /   \ 
        //   yes   no
        //  /        \
        //receive()  fallback()
    fallback() external payable {
        fund();
    }
    receive() external payable {
        fund();
    }
}

// modifier (checking,...)
// sending ether (transfer, send, call) - https://solidity-by-example.org/sending-ether/
// fallback và receive

// Library