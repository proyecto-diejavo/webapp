## Requisitos 

[http://proyecto-diejavo.github.io/webapp](http://proyecto-diejavo.github.io/webapp)

Recomendación: Instalar nvm

Node: v8.11.3
npm: 5.6.0

Install create react app
```sh
  npm install -g create-react-app
```

Inicializar un proyecto
```sh
  create-react-app NombreProyecto
```

Instalar Yarn
```sh
  npm install -g yarn
```

### Crear proyecto en firebase

Con una cuenta de google
[https://firebase.google.com/](https://firebase.google.com/)

### Configurar githubpage
```sh
 yarn add -D gh-pages
```

Configuramos la ruta de la web
```sh
 # packages.json
 ...
 "homepage": "http://proyecto-diejavo.github.io/webapp",
 ...
```

### Deploy!!!!
```sh
  yarn deploy
```

Agregamos el comando al tag scripts
```sh
 # packages.json
  "deploy": "npm run build && gh-pages -d build"
```

```sh
  git add .
  git commit -am "Mensaje del commit"
  git push origin master
```

### Mocks de data
[https://www.mockaroo.com/](https://www.mockaroo.com/)

### React firebase
```sh
  yarn add react-firebase
```

[https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)