import Pages from "./pages/Pages";
import {Userprovider,Rowsprovider, usercontext,Usecollpas} from './data/data'
import './styleBG/dark.scss';
import {DarkModecontext}from './contextdarkmode/darkmodecontext';
import {React,useContext}from 'react'

function App() {
  const {darkMode}=useContext(DarkModecontext)

  return (
    <div className={darkMode?"app dark":"app"}>
      <Usecollpas>
          <Rowsprovider>
             <Userprovider>
                 <Pages></Pages>
             </Userprovider>
           </Rowsprovider>
        </Usecollpas>
    </div>
  );
}

export default App;
