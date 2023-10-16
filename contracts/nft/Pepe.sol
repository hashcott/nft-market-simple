// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Pepe is ERC721, Ownable {
    uint256 public counter = 0;
    string private baseTokenURI;

    constructor() ERC721("Pepe Voz", "Pepe") {}

    function mint(address _to) public onlyOwner returns (uint256) {
        counter++;
        uint256 _tokenId = counter;
        _mint(_to, _tokenId);
        return _tokenId;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function updateBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }
}
