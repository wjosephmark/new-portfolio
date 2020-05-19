import React, { useState, useEfffect } from 'react';
import Typist from 'react-typist';

export default function App(){

  const firstSentence = "Hello, welcome to my portfolio!"
  const secondSentence = "I am a full stack developer."
  const thirdSentence = "passoinate about programming."
  const fourthSentence = "20 years old."
  const fifthSentence = "excited to start my career."

  return (
    <div className='app'>
      <div className="typist">
        <Typist cursor={{show: false}}>
          <h1 className="typist-header" >{firstSentence}</h1>
          <Typist.Backspace count={firstSentence.length} delay={800} />
          <h1 className="typist-header" >{secondSentence}</h1>
          <Typist.Backspace count={25} delay={800} />
          <h1 className="typist-header" >m {thirdSentence}</h1>
          <Typist.Backspace count={31} delay={800} />
          <h1 className="typist-header" >m {fourthSentence}</h1>
          <Typist.Backspace count={15} delay={800} />
          <h1 className="typist-header" >m {fifthSentence}</h1>

        </Typist>
      </div>
    </div>
  );
}
