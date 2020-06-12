# How to use

## Run mysql docker container:

Run a single use docker container for mysql for the demo

```powershell
docker run -d --rm --name mysql1 `
  -e MYSQL_ROOT_PASSWORD=root `
  -e MYSQL_ROOT_HOST=% `
  -p 3306:3306 `
  -p 33060:33060 `
  mysql/mysql-server:5.7
```
