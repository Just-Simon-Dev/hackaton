import { Switch, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import './styles/style.css'

const Main = lazy( () => import('./components/Main') )
const Menu = lazy( () => import('./components/Menu') )
const Form = lazy( () => import('./components/Form') )
const Env = lazy( () => import('./components/Env') )
const Safety = lazy( () => import('./components/Safety') )
const Forum = lazy( () => import('./components/Forum') )
const ResultCard = lazy(() => import('./components/results/ResultCard'))

function App() {

  const location = useLocation()
  const background = location.state && location.state.background;

  return (
    <Suspense fallback='ładowanie..' >
      <div id='menu' > <Menu/> </div>
      <div id='reszta' >
        <Switch location={ location || background } >
          <Route exact path='/' children={ <Main/> } />
          <Route path='/formularz' children={ <Form/> } />
          <Route path='/srodowisko' children={ <Env/> } />
          <Route path='/bezpieczenstwo' children={ <Safety/> } />
          <Route path='/forum' children={ <Forum/> } />
          <Route path='/carCard' children={<ResultCard />} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
