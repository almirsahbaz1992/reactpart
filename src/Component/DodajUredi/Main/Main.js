import React from 'react'
import Tabela from '../../../Container/Tabela';
import { Route } from 'react-router';
import DodajUredi from '../DodajUredi';
import DodajRezervaciju from '../DodajRezervaciju';
const Main=()=>{
    return(
        <div>
{/* <Tabela/> */}
{/* <DodajUrediKuhara/> */}

<Route path='/rezervacije' component={Tabela} exact/>
<Route path='/rezervacije/editrezervacije/:id' component={DodajUredi}/>
<Route path='/rezervacije/dodajrezervaciju' component={DodajRezervaciju}/>

        </div>
    )
    
}
export default Main;