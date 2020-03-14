# Hoxy is

http proxy.

see https://github.com/greim/hoxy

# Installing

```
yarn add hoxy
```

# 自己署名証明書

- no passphrase

```
openssl genrsa -aes128 -out ./XXXYYYZZZ.ga.key 2048
openssl rsa -in ./XXXYYYZZZ.ga.key -out ./XXXYYYZZZ.ga.key
openssl req -new -key ./XXXYYYZZZ.ga.key -sha256 -out ./XXXYYYZZZ.ga.csr
openssl x509 -in ./XXXYYYZZZ.ga.csr -days 3650 -req -signkey ./XXXYYYZZZ.ga.key -sha256 -out ./XXXYYYZZZ.ga.crt
```

# Issue

- @types/hoxy not provided... ????
