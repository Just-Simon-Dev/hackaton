import { Switch, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import './styles/style.css'

const Main = lazy( () => import('./components/Main') )
const Menu = lazy( () => import('./components/Menu') )
const Quiz = lazy( () => import('./components/Quiz/Quiz') )
const Env = lazy( () => import('./components/Env') )
const Safety = lazy( () => import('./components/Safety') )
const Forum = lazy( () => import('./components/Forum') )

function App() {
  const location = useLocation()
  const background = location.state && location.state.background;
  return (
    <Suspense fallback='ładowanie..' >
      <div id='menu' > <Menu/> </div>
      <div id='reszta' >
        <Switch location={ location || background } >
          <Route exact path='/' children={ <Main/> } />
          <Route path='/formularz' children={ <Quiz/> } />
          <Route path='/srodowisko' children={ <Env/> } />
          <Route path='/bezpieczenstwo' children={ <Safety/> } />
          <Route path='/forum' children={ <Forum/> } />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
