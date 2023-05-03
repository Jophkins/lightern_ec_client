import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import styles from './Auth.module.scss';
import {login} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Auth = observer(() => {
  const navigate = useNavigate();
  const {user} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const data = await login(email, password);
      user.setUser(data);
      user.setIsAuth(true);
      navigate('/light-sp/admin/');
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row g-3 justify-content-center">
              <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                <input type="text" className="form-control" id="staticEmail2" placeholder="Email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <button onClick={signIn} className="btn btn-outline-secondary mb-3">Confirm identity</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
});

export default Auth;
