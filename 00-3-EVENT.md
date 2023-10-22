## Event trong solidity

Event trong Solidity được sử dụng để ghi lại các hoạt động xảy ra trong smart contract. Các thành phần chính của event bao gồm:

- Từ khóa event: khai báo đây là một event.
- Tên event: đặt tên cho event.
- Danh sách tham số (Parameter list): các giá trị sẽ được lưu lại cùng event.
  Ví dụ một event đơn giản:

```solidity
event Deposit(address indexed \_from, uint \_amount);
```

Trong đó:

- Deposit: tên của event
- address indexed \_from: địa chỉ người gửi, indexed cho phép tìm kiếm theo địa chỉ
- uint \_amount: số tiền đã gửi

Để kích hoạt event, ta dùng lệnh emit:

```solidity
function deposit() public payable {
emit Deposit(msg.sender, msg.value);
}
```

Khi hàm deposit() được gọi, event Deposit sẽ được kích hoạt và ghi lại thông tin. Event giúp theo dõi tx và bug dễ dàng hơn
