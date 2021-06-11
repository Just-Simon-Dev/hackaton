import { Switch, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import './styles/style.css'

const Main = lazy( () => import('./components/Main') )
const Menu = lazy( () => import('./components/Menu') )
const Quiz = lazy( () => import('./components/Quiz/Quiz') )
const Env = lazy( () => import('./components/Env') )
const Safety = lazy( () => import('./components/Safety') )
const Forum = lazy( () => import('./components/Forum') )
const ResultCard = lazy(() => import('./components/results/ResultCard'))
const MainForum = lazy(() => import('./components/forum/Main'))
const Login = lazy(() => import('./components/forum/Login'))
const Registration = lazy(() => import('./components/forum/Registration'))

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
          <Route path='/carCard' children={<ResultCard />} />
          <Route path='/forum/glowna' children={<MainForum />} />
          <Route path='/logowanie' children={<Login />} />
          <Route path='/rejestracja' children={<Registration />} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
