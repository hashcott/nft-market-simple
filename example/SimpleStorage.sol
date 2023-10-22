// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

contract SimpleStorage {
    // uint256 = 0, int256 = 0, bool = false, string = '', address ='', bytes32, struct, array, mappings

    People[] public listPersons;
    // index:  0 -> n

    // địa chỉ ví => thông tin của người dùng (finance)
    // contract : số hợp đồng (HD20210610) => thông hợp đồng (address A + address B)
    // EDU: mã sinh viên => thông bằng cấp
    // key => value
    // "0264237456267" => 69
    mapping(string => People) public nameToFavoriteNumber;

    struct Address {
        string street;
    }

    struct People {
        uint256 favoriteNumber;
        string fullName;
        string numberPhone;
        Address addr;
    }


    // GET/SET
    function store(uint256 _favoriteNumber, string memory _fullName, string memory _numberPhone, string memory _street) public {
        Address memory _addr = Address({ street: _street  });
        People memory newPerson = People({ favoriteNumber: _favoriteNumber, fullName: _fullName, numberPhone: _numberPhone, addr: _addr });
        listPersons.push(newPerson);
        
        nameToFavoriteNumber[_fullName] = newPerson;

    }



}