# How to start your project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Intro to React
React is a component-based framework which means that you can build a website using small, reusable pieces of code called components. 

It uses a virtual DOM which means it can update the UI without having to refresh the page. 

It uses JSX, which is a syntax extension to JavaScript that allows you to write HTML-like code inside JavaScript.

It uses one-way data binding, which means that it can pass data from a parent component to a child component.

It uses unidirectional data flow, which means that it can pass data from a parent component to a child component.

It uses a declarative API, which means that you can describe what you want to do and let React figure out how to do it.
//8. It uses a component lifecycle, which means that you can execute code at specific points in the lifecycle of a component.
//9. It uses a virtual DOM, which means that it can update the UI without having to refresh the page.

React.js is a JavaScript framework used to create user interfaces and web applications.

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

The benefits of using React to develop applications include:

• It makes development faster and simpler

• It is easy to learn and use

• It makes code more readable and maintainable

• It is easy to test and debug

• It provides good performance

• It is easy to scale

React uses the virtual DOM to make updates to the UI faster and more efficient. When a component’s state changes, React updates only the changed component, not the entire UI. This makes React apps more responsive and fast.

JSX is  a syntax extension to JavaScript. It is used with React to describe what the UI should look like. JSX makes it easier to create complex UIs.

React Router is a popular library used with React to manage navigation and URLs. React Router provides a set of components and APIs that allow you to declaratively describe your routes and navigation.

Webpack is a module bundler. It is used to bundle JavaScript files for use in a browser. Webpack helps you optimize and load your JavaScript code faster.

 Babel is a JavaScript compiler. It is used to compile JSX and other JavaScript code into regular JavaScript code that can be run in a browser.

Create React App is a tool created by Facebook to help you create React applications. It provides a set of scripts and configuration that make it easy to create and run React apps.

The folder structure of React includes a public folder which contains the index.html file and a src folder which contains the JavaScript code.

The index.html file is the entry point for your React application. It loads the React JavaScript code from the src folder and renders the React component into the document.

The src folder contains the JavaScript code for your React application. This is where you will write your components and code.

The App.js file is the root component of your React application. It is where you will put your top-level component.

The App.css file is the stylesheet for your React application. It contains the CSS styles for your component.

The index.js file is the main file that will be run when your React application is started. It is where you will render your root component.

The package.json file contains the dependencies for your React application.

What is stored in the public folder?
The public folder contains the index.html file and the favicon. The index.html file is the entry point for your React application. The favicon is the small icon that appears in the browser's tab. Anything that you  put in the public folder will be available to the browser.

What is stored in the src folder?
The src folder contains the JavaScript code for your React application. This is where you will write your components and code.

What is the difference between the index.html file and the index.js file?
The index.html file is the entry point for your React application. It loads the React JavaScript code from the src folder and renders the React component into the document. The index.js file is the main file that will be run when your React application is started. It is where you will render your root component.

What is the difference between React and React Router?
React is a JavaScript framework used to create user interfaces and web applications. React Router is a popular library used with React to manage navigation and URLs. React Router provides a set of components and APIs that allow you to declaratively describe your routes and navigation.

React uses state and props to manage data and make components interactive.

State is the data that is managed by the component. It can be used to store data that is necessary for the component to render.

Props are attributes that are passed to the component. They can be used to store data that is necessary for the component to render.

Components are the building blocks of React applications. They are reusable pieces of code that can be used to create complex UIs.

React components are typically written in JSX, a syntax extension to JavaScript. JSX makes it easier to create complex UIs.

React components can be stateless or stateful.

Stateless components are components that do not manage any state. They are typically simple components that take props and return a UI.

Stateful components are components that manage state. They are typically complex components that take props and use state to return a UI.




## Part I: Files and Folders

//React has a folder structure that is very similar to the one we have been using in the past. 
//The main difference is that we have a src folder that contains all of our code.
//The src folder contains the following folders and files:
//public: contains the index.html which is the HTML file that all of your React files will be rendered into..
//there is no script tag in the html file in react because react will take care of that for us by using the ReactDOM.render() method in the index.js file.
//the public folder also holds files that are used by the application such as images and fonts.
//src: contains the App.js file which is the main component of our application.
//App.js: is the main component of our application. 
//It is the component that is rendered in the index.html file.
//App.css: is the css file that is used by the App.js component.
//index.js: is the entry point of our application.
//react is a library that is used to create user interfaces. 
//react creates single page applications so that the user does not have to refresh the page when they navigate to a different page. 
//This is done by using a virtual DOM. The virtual DOM is a copy of the real DOM. It is a copy of the DOM that is in the browser. 
//When a component updates, react will update the virtual DOM. 
//This process is called reconciliation.It is the process of comparing the virtual DOM to the real DOM.
//If there are any changes, react will update the real DOM. It will not update the entire DOM.
//this speeds up the process of updating the DOM which makes the application more responsive and faster.


