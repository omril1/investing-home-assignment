# How to use

## prerequisites

- Node.js v10+ (tested on node 10.15.3)
- Yarn v1 (tested on 1.22.4)
- mysql-server v5.7 running on localhost with UN/PW=root **or** docker
- browser that supports es2017+ (tested on chrome)

## Run mysql with docker container:

Run a single use docker container for mysql for the demo

powershell:

```powershell
docker run -d --rm --name mysql1 `
  -e MYSQL_ROOT_PASSWORD=root `
  -e MYSQL_ROOT_HOST=% `
  -p 3306:3306 `
  mysql/mysql-server:5.7
```
or in bash:
```bash
docker run -d --rm --name mysql1 \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_ROOT_HOST=% \
  -p 3306:3306 \
  mysql/mysql-server:5.7
```

## How to run

1. Clone the repo
2. Open the cloned repo in a terminal
3. Run `yarn` command to install the dependencies
4. Run `yarn webpack:prod` to compile the front-end
5. Run `yarn start` to start the app on port `8080` (make sure the mysql-server is already running)
6. Open the browser on `http://localhost:8080/`

## Test

Run `yarn test` to view the tests

> **Note**: for now they only test the front-end
