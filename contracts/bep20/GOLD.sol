// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./IERC20.sol";

contract Gold is IERC20 {
    constructor() {
        _totalSupply = 1000000;
        _balances[msg.sender] = 1000000;
        _symbol = "G";
    }

    uint256 private _totalSupply;
    string private _symbol;

    mapping (address => uint256) private _balances;
    // mapping[sender][spender] => _allowances
    mapping (address => mapping (address => uint)) _allowance;

    function totalSupply() external view override returns (uint256) {
        return _totalSupply;
    }

     function symbol() external view override returns (string memory) {
        return _symbol;
    }

    function balanceOf(
        address _owner
    ) external view override returns (uint256 balance) {
        return _balances[_owner];
    }

    function transfer(
        address _to,
        uint256 _value
    ) external override returns (bool success) {
        require(_balances[msg.sender] >= _value); 
        _balances[msg.sender] -= _value;
        _balances[_to] += _value;

        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external override returns (bool success) {
        require(_balances[_from] >= _value);
        // uy quyen :  tu tai khoan cua Hanh, msg.sender la Louis thi co the chuyen cho bat ki ai so token nho hon 50
        require(_allowance[_from][msg.sender] >= _value);
        _balances[_from] -= _value;
        _balances[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(
        address _spender,
        uint256 _value
    ) external override returns (bool success) {
        // Hanh cap quyen cho Louis giao dich 50 token
        _allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(
        address _owner,
        address _spender
    ) external view override returns (uint256 remaining) {
        return _allowance[_owner][_spender];
    }
}
