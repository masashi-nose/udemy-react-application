import React from 'react';

//JSXでのコーディング
//直感的にコーディングできる
function App() {

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


export default App;
