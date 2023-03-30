# frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# tailrunner-front

bootstrap5
splitpane
codemirror 


sudo docker build  --platform linux/arm64 -t frontend-vue:0.2 . 
docker tag frontend-vue:0.2 stevekim01310/frontend-vue:0.2  
docker push stevekim01310/frontend-vue:0.2

docker pull stevekim01310/frontend-vue:0.3
docker run --platform linux/arm64 -it -p 80:80 --rm stevekim01310/frontend-vue:0.3