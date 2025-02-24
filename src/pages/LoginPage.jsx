import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated]);

  return (
    <div
      className='container-fluid d-flex flex-column align-items-center justify-content-center vh-100'
      style={{
        background: 'linear-gradient(to right, #ff6a00, #ee0979)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h1 className='display-4 fw-bold mb-4'>¡Bienvenido de nuevo!</h1>
      <p className='lead mb-4'>
        Inicia sesión para gestionar tus pendientes y mantenerte al día con tus
        tareas. ¡Nosotros nos encargamos de que todo esté bajo control!
      </p>
      <div className='row justify-content-center w-100'>
        <div className='col-md-6 col-lg-4'>
          {signinErrors.map((error, i) => (
            <div
              className='alert alert-danger text-center'
              key={i}
            >
              {error}
            </div>
          ))}
          <form
            className='p-4 border rounded-3 shadow bg-white'
            onSubmit={onSubmit}
          >
            <h2 className='text-center text-uppercase fw-bold mb-4 text-primary'>
              Login
            </h2>
            <div className='mb-3'>
              <input
                type='email'
                placeholder='Email'
                {...register('email', { required: true })}
                className='form-control'
              />
              {errors.email && (
                <p className='text-danger small mt-1'>Email is required</p>
              )}
            </div>
            <div className='mb-3'>
              <input
                type='password'
                placeholder='Password'
                {...register('password', { required: true })}
                className='form-control'
              />
              {errors.password && (
                <p className='text-danger small mt-1'>Password is Required</p>
              )}
            </div>
            <button
              type='submit'
              className='btn btn-primary w-100 fw-bold'
            >
              Login
            </button>
          </form>
          <p className='mt-3 text-center'>
            Don't have an accoutn?{' '}
            <Link
              to='/register'
              className='text-decoration-none fw-bold'
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
