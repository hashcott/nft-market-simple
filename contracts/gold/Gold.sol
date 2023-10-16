// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract GOLD is ERC20, Pausable, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    constructor() ERC20("GOLD","GD") {
        _setRoleAdmin(DEFAULT_ADMIN_ROLE, msg.sender);
        _setRoleAdmin(PAUSER_ROLE, msg.sender);
        _mint(msg.sender, 1000000 * 10^decimals());
    }
    
    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function _unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }
}