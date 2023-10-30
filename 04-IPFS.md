## IPFS

- là một storage lưu trữ dữ liệu file cho blockchain, mạng lưới lưu trữ

## How to use

- https://dist.ipfs.tech/#kubo
- Download dự trên hệ điều hành
- Giải nén
- Mở git bash (cmd) , di chuyển tới thư mục

```
./ipfs.exe shutdown
./ipfs.exe daemon
```

## How to fix cors ?

```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["url mà chúng ta connect tới"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["GET", "POST"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Headers '["Authorization"]'
ipfs config --json API.HTTPHeaders.Access-Control-Expose-Headers '["Location"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
```
