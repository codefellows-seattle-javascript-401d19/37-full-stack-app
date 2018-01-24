# Lab 28 Notes List

## Author: Nicholas Carignan

## Node Package dependencies
1. "babel-core": "^6.26.0",
1. "babel-loader": "^7.1.2",
1. "babel-plugin-transform-object-rest-spread": "^6.26.0",
1. "babel-preset-es2015": "^6.24.1",
1. "babel-preset-react": "^6.24.1",
1. "css-loader": "^0.28.8",
1. "enzyme": "^3.3.0",
1. "enzyme-adapter-react-16": "^1.1.1",
1. "extract-text-webpack-plugin": "^3.0.2",
1. "html-webpack-plugin": "^2.30.1",
1. "node-sass": "^4.7.2",
1. "react": "^16.2.0",
1. "react-dom": "^16.2.0",
1. "react-router-dom": "^4.2.2",
1. "resolve-url-loader": "^2.2.1",
1. "sass-loader": "^6.0.6",
1. "style-loader": "^0.19.1",'
1. "uuid": "^3.1.0",
1. "webpack": "^3.10.0",
1. "webpack-dev-server": "^2.10.0"

## Setup
  clone the repo by typing in

  `git clone https://github.com/ncarignan/28-todo-app.git`

  then install the packages with

   `npm install`

  then the app is ready to be setup by running

   `npm run build`

   or if you want to make modifications to the code on the fly

   ` npm run watch`
## App
The app keeps track of the state of a note list. When a note is added, the state changes to include a new note  and it is then displayed in a note list. When it is deleted,  it is removed from the note list and the DOM.
