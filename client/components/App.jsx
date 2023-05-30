import React, { Component, useState } from 'react';
import PastProjects from './PastProjects.jsx';
import SchemaMaker from './SchemaMaker.jsx';
import { Route, Routes } from 'react-router-dom';


function App() {
  //State for Key-Value Pairs
  const [kvpArr, setKvp] = useState([
    { name: '', type: 'Number', require: false },
  ]);
  //State for Past Projects

  //functions to drill down

  const schemaFunc = {};
  // updateKvpSchema actually changes the state each time, and then all the other f(n)s invoke it.
  schemaFunc.updateKvpSchema = (rowNum, changeObj) => {
    const newState = structuredClone(kvpArr);
    Object.assign(newState[rowNum], changeObj);
    setKvp(newState);
  };


  schemaFunc.addRow = () => {
    const newState = structuredClone(kvpArr);
    newState.push({ name: '', type: 'string', require: false });
    setKvp(newState);
  };

  schemaFunc.saveSchema = () => {
    fetch('/', {
      method: "PATCH",
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
         'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ id: '6472390fdbeb9b56b2f98835', form: JSON.stringify(kvpArr) }),
      mode: 'cors'

    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div>
      <h1>Schema Dreama</h1>
      <span><InputButton /></span>
      <div><PastProjects updateState={setKvp}/> </div>
      <SchemaMaker kvpArr={kvpArr} schemaFunc={schemaFunc} />
    </div>
    </>
  );
}

export default App;
