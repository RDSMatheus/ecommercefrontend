import React from 'react';
import styles from './SignIn.module.css';
import SideImage from '../../../assets/side_image.png';
import Input from '../../Form/Input';
import { UserContext } from '../../../GlobalContext';
import Button from '../../Form/Button';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { userLogin, loading, logged } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (logged) navigate('/myaccount');
  }, [logged, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await userLogin({ email, password });
      if (logged) navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={`${styles.signIn} container `}>
      <div className={`${styles.imgContainer} slideLeft`}>
        <img src={SideImage} alt="" />
      </div>
      <form className={`${styles.form} slideRight`} onSubmit={handleSubmit}>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <Input
          type="text"
          value={email}
          setValue={setEmail}
          placeholder="Email"
        />
        <Input
          type="text"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <div className={styles.buttonContainer}>
          {loading ? (
            <Button disabled>Logando...</Button>
          ) : (
            <Button>Log In</Button>
          )}
          <p>Forget Password?</p>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
