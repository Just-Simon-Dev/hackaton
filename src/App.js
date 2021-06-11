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
          <Route exact path='/' component={ <Main/> } />
          <Route path='/formularz' component={ <Form/> } />
          <Route path='/srodowisko' component={ <Env/> } />
          <Route path='/koszty' component={ <Costs/> } />
          <Route path='/bezpieczenstwo' component={ <Safety/> } />
          <Route path='/forum' component={ <Forum/> } />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
