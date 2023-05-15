import React from 'react';
import {Routes,Route,Link} from 'react-router-dom'
import Pg1 from './componentes/Pagina1'
import Pg2 from './componentes/Pagina2'
import Pg3 from './componentes/Pagina3'

export default function App() {
  return (
    <>
      <header>
          <Link to=''>Home</Link><br/>
          <Link to='/pag1'>Pagina 1</Link><br/>
          <Link to='/pag2'>Pagina 2</Link><br/>
          <Link to='/pag3'>Pagina 3</Link>
          
      </header>
      <main>
        <Routes>
          <Route path='/pag1' Component={Pg1}/>
          <Route path='/pag2' Component={Pg2}/>
          <Route path='/pag3' Component={Pg3}/>
        </Routes>
      </main>
    </>
  );
}


