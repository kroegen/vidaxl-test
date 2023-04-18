# vidaxl-test

```
This test is a full stack app made with vue2 + veutify and express + mongoose
```

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
