import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import './AuthForm.css';


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const cartCtx = useContext(CartContext)

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true)

    if (isLogin) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAA-F4NnCJ7QsljnVQfEBEz2Eq8aqrIZ9I', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        setIsLoading(false)
        if (res.ok) {
          return res.json().then((data) => {
            cartCtx.login(data.idToken, data.email)
            navigate('/store')

          })
        }
        else {
          return res.json().then((data) => {
            let errorMessage = "Authantication failed"
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage)
          })
        }
      })
    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAA-F4NnCJ7QsljnVQfEBEz2Eq8aqrIZ9I', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        setIsLoading(false)
        if (res.ok) {
          //'''
        }
        else {
          return res.json().then((data) => {
            let errorMessage = "Authantication failed"
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage)
          })
        }
      })
    }



  }
  return (
    <section className='auth'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className='control'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        {isLoading ? <p className='loading'>Sending request....</p> : <div className=''>
          <button
            type='submit'
            className='toggle'
          >
            {isLogin ? 'Login' : 'Create new account'}
          </button>
        </div>}

        <div className='actions'>
          <button
            type='button'
            className='toggle'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
