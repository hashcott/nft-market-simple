// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract HelloWorld {
    string public message;
    constructor(string memory _message) {
        message = _message;
    }

    function prinerHelloWorld() public view returns (string memory) {
        return message;
    }
    
    function updateMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}