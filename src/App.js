import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ErrorPage from './components/ErrorPage';
const appRouter= createBrowserRouter([
  {path:'/',
  element: <Body/>,
  children:[
    {path:'/',
  element:<MainContainer/>},
  {path:'/watch',
  element:<WatchPage/>},
  {path:'*',
  element:<ErrorPage/>},
  ]
// router dom
}
])
const App=()=> {
  return (
    <Provider store={store}>

    <div className="App">
     <Head/>
     {/* <Body/> */}
     <RouterProvider router={appRouter}/>
     
    </div>
    </Provider>
  );
}
export default App;
 