import React from "react";
// import Typist from 'react-typist';
// import {navigate} from "hookrouter"
var sets = [
  {
    set_title: "EC2",
  },
  {
    set_title: "Lambda",
  },
];
export default function App() {
  return (
    <div className="home-app">
      <div className="content-wrapper">
        <div className="sets-wrapper">
          {sets.map(({ set_title }) => (
            <div className="set-wrapper">
              <h1 className="set-title">{set_title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
