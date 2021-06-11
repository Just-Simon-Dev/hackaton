import { Switch, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

const Main = lazy( () => import('./components/Main') )
const Form = lazy( () => import('./components/Form') )
const Env = lazy( () => import('./components/Env') )
const Costs = lazy( () => import('./components/Costs') )
const Safety = lazy( () => import('./components/Safety') )
const Forum = lazy( () => import('./components/Forum') )

function App() {
  const location = useLocation()
  const background = location.state && location.state.background;
  return (
    <Suspense fallback='ładowanie..' >
      <div id='menu' > menu </div>
      <div id='reszta' >
        <Switch location={ location || background } >
          <Route exact path='/' children={ <Main/> } />
          <Route path='/formularz' children={ <Form/> } />
          <Route path='/srodowisko' children={ <Env/> } />
          <Route path='/koszty' children={ <Costs/> } />
          <Route path='/bezpieczenstwo' children={ <Safety/> } />
          <Route path='/forum' children={ <Forum/> } />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
