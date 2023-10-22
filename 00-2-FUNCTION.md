## Function trong solidity

Function là khối mã thực thi trong Solidity. Các thành phần chính của function bao gồm:

- Kiểu truy cập (Access modifier): xác định quyền truy cập vào function, ví dụ public, private, internal, external.
- Kiểu dữ liệu trả về (Return type): kiểu dữ liệu mà function trả về, ví dụ uint, string, bool.
- Tên function.
- Danh sách tham số (Parameter list): các tham số truyền vào cho function.
- Body: nội dung của function được viết trong cặp {}.

Ví dụ một function đơn giản:

```solidity
function add(uint a, uint b) public pure returns (uint) {
return a + b;
}
```

Trong đó:

- public: cho phép truy cập từ bên ngoài hợp đồng
- pure: khai báo function này không thay đổi trạng thái
- returns (uint): trả về kiểu uint
- add: tên function
- (uint a, uint b): nhận hai tham số kiểu uint
- return a + b: phần thân của hàm là phép cộng hai tham số

### Các kiểu truy cập chính bao gồm:

- public: Cho phép truy cập từ bên trong lẫn bên ngoài hợp đồng.
- private: Chỉ cho phép truy cập từ bên trong hợp đồng.
- internal: Giống private nhưng còn cho phép truy cập từ các hợp đồng kế thừa.
- external: Giống public nhưng chỉ có thể gọi từ bên ngoài hợp đồng.

Ví dụ:

```solidity
// Chỉ gọi được từ trong hợp đồng
function privateFunc() private {
// code
}

// Gọi được từ bên ngoài hợp đồng
function externalFunc() external {
// code
}

// Gọi được từ bất kỳ đâu
function publicFunc() public {
// code
}
```

> > Kiểu truy cập giúp kiểm soát quyền truy cập và bảo mật code tốt hơn.
