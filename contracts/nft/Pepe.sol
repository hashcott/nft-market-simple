// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Pepe is ERC721URIStorage {
    uint256 public tokenCounter = 0;

    constructor() ERC721("Pepe Voz", "Pepe") {}

    function mint(string memory _tokenURI) external returns (uint256) {
        tokenCounter++;
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, _tokenURI);
        return tokenCounter;
    }
}
