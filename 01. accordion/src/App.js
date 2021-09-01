import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
 const questions = data;
  return (
    <main>
    <section className="container">
      <h3>Questions and answers about login</h3>
      {questions.map(question => (
        <Question key = {question.id} title ={question.title} info = {question.info}/>
      ))}  
    </section>
  </main>
  )
}

export default App;
