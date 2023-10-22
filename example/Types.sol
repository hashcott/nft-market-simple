// SPDX-License-Identifier: MIT
pragma solidity >= 0.8;

contract TypeOfVariable {

    // typeOfVariable acesss(private/public) nameOfVariable = value
    // types: string (dynamically sized byte arrays), boolean (true or false), int (uint), address 
    // "Hello" => [48, 65, 6c, 6c, 6f]
    // không có "null" or "undefined" 

    // int = 0
    // bool = false
    // string = ""

    string public owner ="Harry Nguyen";
    int public numOfWorker = 5;

    // khai báo: bool myVal
    //  "or" and "and": || and &&
    bool public isOwner = true;

    constructor() {
        // > <, >=, <=, ==, ()
        if((isOwner &&  numOfWorker == 7) && false) {
            isOwner = !isOwner;
        }
    }

    // integer : 
    // uint8: 0 -> 255 (2^8 bits => )
    // int8: -128 -> 127
    // 2^8 => 2**8
    // int256 : -2^256/ 2 -> (2^256 )/2 - 1
    // => Tối ưu phí gas


    // address : mọi tương tác trên ethereum đều dựa trên addresss
    // size : 20 byte
    // .transfer(),  .send(), .call.value()() 


    // string and bytes => [h,e,l,l,o] không thể arr[0]
    // string rất tốn kém


    // Keys:  solidity is static type programing language
} 