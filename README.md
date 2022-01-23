# nest-http-methods-test

Testing http Methods

## Installing

```bash
docker-compose up -d
```

or

```bash
npm install
npm run start
```

## Test

Swagger - http://localhost:3000

### Get

```bash
curl -X 'GET' \
  'http://localhost:3000/get' \
  -H 'accept: */*'
```

### Post

```bash
curl -X 'POST' \
  'http://localhost:3000/post' \
  -H 'accept: */*' \
  -d ''
```

### Patch

```bash
curl -X 'PATCH' \
  'http://localhost:3000/patch' \
  -H 'accept: */*'
```

### Put

```bash
curl -X 'PUT' \
  'http://localhost:3000/put' \
  -H 'accept: */*'
```

### Delete

```bash
curl -X 'DELETE' \
  'http://localhost:3000/delete' \
  -H 'accept: */*'
```
