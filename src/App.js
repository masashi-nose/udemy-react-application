import React, { Component } from 'react';

//JSXでのコーディング
//直感的にコーディングできる
function App() {
  //JSX = JavaScript XML(JSを拡張した言語) 
  return <h1>Hello, World!</h1>;
}

//バニラJSでのコーディング↓
// class App extends Component{
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, World!!!"
//     )
//   }
// }

export default App;
