import React from 'react';

//JSXでのコーディング
//直感的にコーディングできる
function App() {
  //JSX = JavaScript XML(JSを拡張した言語) 

  // const greeting = "Hi, nice to meet you";
  // const dom = <h1 className="foo">{greeting}</h1>
  //returnで返すJSXは一つのタグで囲む
  return (
    // <React.Fragment>
    //   <label htmlFor="bar">bar</label>
    //   <input type="text" onClick={() => {console.log("I am clicked");}} />
    // </React.Fragment>

    <div>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>

    </div>

  )
}

const Cat = () => {
  return <h2>Meow!</h2>
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
