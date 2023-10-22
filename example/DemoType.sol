// SPDX-License-Identifier: MIT
pragma solidity >= 0.8;

contract DemoTypes {
    uint public numOfWorker = 10;
    address public wallet;
    string private firstName;
    string private lastName;

    function setValue(uint _myVal) public {
        numOfWorker = _myVal;
    }

    // calldata: gọi giá trị của biến
    // memory: địa chỉ bộ nhớ
    // string : array

    function setInfo(string memory _firstName, string memory _lastName) public {
        firstName = _firstName;
        lastName = _lastName;
    }

    // EVM : 3 nơi lưu dữ liệu
    //-  storage: (ổ cứng) nơi chứa các biến state trong contract. mỗi contract sẽ có 1 bộ nhớ riêng,
        //bộ nhớ không đổi ở mỗi lần call function.

    // - memory: bộ nhớ tạm. xem xong xoá
    // - stack: biến local, nhỏ

    function getInfo() public view returns (string memory) {
        string memory fullName = string.concat(firstName , " ", lastName);
        return fullName;
    }

    // address 
    function setAccount(address _address) public {
        wallet = _address;
    }

    function getBalance() public view returns (uint256) {
        return wallet.balance;
    }

    // Keynote: 4 kiểu dữ liệu: int, string, bool, address

    // Buổi sau: demo payment (chuyển tiền từ a->b), (mapping (map) và struct (object))

}