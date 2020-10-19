import React from 'react';

//JSXでのコーディング
//直感的にコーディングできる
function App() {
  //JSX = JavaScript XML(JSを拡張した言語) 
  // const greeting = "Hi, nice to meet you";
  // const dom = <h1 className="foo">{greeting}</h1>
  //returnで返すJSXは一つのタグで囲む
  
  const profiles = [
    {
      name: "Taro",
      age: 20
    },
    {
      name: "Hanako",
      age: 23
    },
    {
      name: "Noname"
    }
  ]

  return (
    // <React.Fragment>
    //   <label htmlFor="bar">bar</label>
    //   <input type="text" onClick={() => {console.log("I am clicked");}} />
    // </React.Fragment>

    //props定義
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>

  )
}

const User = (props) => {
  return <h2>I'm {props.name} and {props.age} years old.</h2>
}

User.defaultProps = {
  age: 10
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
