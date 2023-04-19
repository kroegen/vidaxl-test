# vidaxl-test

```
This test is a full stack CRUD app made with vue2 + veutify and express + mongoose
A table with possibility to show/add/delete/update items stored in db on be side
```
![Screenshot1](public/info1.png?raw=true "Screenshot1")
![Screenshot2](public/info2.png?raw=true "Screenshot2")

## Project setup
```
npm install
```

### Edit config files (server/bin/config.json and .env)
```
mv server/bin/config.json.sample server/bin/config.json
mv .env.sample .env && cp .env .env.prod
```

### Compiles and minifies for production
```
npm run build
```

### Run server
```
npm run start
```

### See http://localhost:3000

## Compiles and hot-reloads for development
```
npm run serve (for front) + npm run start (for server) in other tab
```
