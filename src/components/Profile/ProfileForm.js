import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import CartContext from '../../store/cart-context';

const ProfileForm = () => {
  const newPasswordInput = useRef();
  const cartCtx = useContext(CartContext)

const ChangePasswordHandler =(e)=>{
   e.preventDefault();
   const newPassword = newPasswordInput.current.value;

   fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAA-F4NnCJ7QsljnVQfEBEz2Eq8aqrIZ9I', {
        method: 'POST',
        body: JSON.stringify({
          idToken: cartCtx.token,
          password: newPassword,
          returnSecureToken: false
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res)=>{
        //we can do something here
      })
}
  
  return (
    <form className={classes.form} onSubmit={ChangePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
