## Các kiểu dữ liệu cơ bản

Solidity hỗ trợ một số kiểu dữ liệu cơ bản sau:

### Kiểu số nguyên (integer): uint, int - ví dụ uint256, int8.

Ví dụ:

```solidity
uint256 public myUint = 123;
int8 private myInt = -10;
```

### Kiểu boolean: true hoặc false.

Ví dụ:

```solidity
bool isEligible = true;
```

### Kiểu địa chỉ (address): lưu trữ địa chỉ Ethereum, có 2 kiểu là address và address payable.

Ví dụ:

```solidity
address public myAddress = 0x777788889999AaAAbBbbCcccddDdeeeEfFFfCc;
address payable public ownerAddress = payable(msg.sender);
```

### Kiểu bytes: lưu trữ dữ liệu dạng byte.

Ví dụ:

```solidity
bytes32 public myBytes = "abc123";
```

Kiểu string: lưu trữ chuỗi ký tự.
Ví dụ:

```solidity
string public myString = "Hello World";
```

## Ngoài các kiểu dữ liệu cơ bản, Solidity cũng hỗ trợ các kiểu dữ liệu phức tạp hơn:

### Array: tập hợp các phần tử có cùng kiểu dữ liệu.

Ví dụ:

```solidity
uint[] public array1 = [1, 2, 3]; // mảng động
uint[3] public array2 = [4, 5, 6]; // mảng tĩnh 3 phần tử
```

### Struct: nhóm các biến có kiểu dữ liệu khác nhau.

Ví dụ:

```solidity
struct Car {
string model;
uint year;
address owner;
}

Car public car;
car.model = "Toyota";
car.year = 2019;
car.owner = msg.sender;
```

### Mapping: ánh xạ key sang value, tương tự như dictionary trong Python.

Ví dụ:

```solidity
mapping (address => uint) public balances;
balances[msg.sender] = 123;
```

### Enum: tập hợp các giá trị có tên.

Ví dụ:

```solidity
enum Color {Red, Green, Blue}
Color public color = Color.Green;
```

Như vậy Solidity cung cấp khá đầy đủ các kiểu dữ liệu để xây dựng smart contract.
