import { useState, useEffect } from 'react';
import './App.css';
import { Succsess } from './components/Success';
import { Loading } from './components/Loading';
import { Error } from './components/Error';

const Constructor = () => {

  return (
    <div className='wrapper'>
      <Succsess url={"http://localhost:7070/data"} initialData={[]}/>
      <Loading url={"http://localhost:7070/loading"} initialData={[]}/>
      <Error url={"http://localhost:7070/error"} initialData={[]}/>
    </div>
  )
}

function App() {
  

  return (
    <div className="App">
      <Constructor />
    </div>
  )
}

export default App
