import React from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from "./components/MainNavbar";
import SecondNavbar from "./components/SecondNavbar";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";


const App = observer(() => {
  // const {user} = useContext(Context);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   check().then(data => {
  //     user.setUser(true);
  //     user.setIsAuth(true);
  //   }).catch(err => {
  //     console.log('не авторизован')
  //   }).finally(() => setLoading(false));
  //
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="spinner-border" role="status">
  //       <span className="visually-hidden">Loading...</span>
  //     </div>
  //   )
  // }

  return (

    <BrowserRouter>
      <div className="wrapper">
        <MainNavbar/>
        <SecondNavbar/>

        <AppRouter />

        <Footer/>
      </div>
    </BrowserRouter>
  );
});

export default App;
