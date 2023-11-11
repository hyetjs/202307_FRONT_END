import './App.css';
import Count from './components/count/count';
import User from './components/user/user';
import UserProvider from './context/store';


function App() {
  return (
    <UserProvider>
        <User/> 
        <Count/> {/*RouteProvider*/}
    </UserProvider>
  );
}
export default App;
