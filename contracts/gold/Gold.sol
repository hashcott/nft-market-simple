// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract GOLD is ERC20, Pausable, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    mapping(address => bool) _blacklist;

    constructor() ERC20("GOLD", "GD") {
        _setRoleAdmin(DEFAULT_ADMIN_ROLE, msg.sender);
        _setRoleAdmin(PAUSER_ROLE, msg.sender);
        _mint(msg.sender, (1000000 * 10) ^ decimals());
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function _unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    function addToBlackList(
        address _account
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(
            _account != msg.sender,
            "Gold: must not add admin role user to blacklist"
        );
        require(
            _blacklist[_account] == false,
            "Gold: Account was on blacklist"
        );
        _blacklist[_account] = true;
    }

    function removeFromBlackList(
        address _account
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(
            _blacklist[_account] == true,
            "Gold: Account wasn't on blacklist"
        );
        _blacklist[_account] = false;
    }
}
