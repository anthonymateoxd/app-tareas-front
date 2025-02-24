import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async values => {
    signup(values);
  });

  return (
    <div
      className='container-fluid d-flex flex-column align-items-center justify-content-center vh-100'
      style={{
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h1 className='display-4 fw-bold mb-4'>¡Únete a nosotros!</h1>
      <p className='lead mb-4'>
        Regístrate para comenzar a organizar tus tareas y alcanzar tus metas con
        eficiencia. ¡El primer paso hacia el éxito empieza aquí!
      </p>
      <div className='row justify-content-center w-100'>
        <div className='col-md-6 col-lg-4'>
          {registerErrors.map((error, i) => (
            <div
              className='alert alert-center text-center'
              key={i}
            >
              {error}
            </div>
          ))}
          <form
            onSubmit={onSubmit}
            className='p-4 border rounded-3 shadow bg-white'
          >
            <h2 className='text-center text-uppercase fw-bold mb-4 text-primary'>
              Create Account
            </h2>
            <div className='mb-3'>
              <input
                type='text'
                placeholder='Username'
                {...register('username', { required: true })}
                className='form-control'
              />
              {errors.username && (
                <p className='text-danger small mt-1'>Username is required</p>
              )}
            </div>
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
                <p className='text-danger small mt-1'>Password is required</p>
              )}
            </div>

            <button
              type='submit'
              className='btn btn-primary w-100 fw-bold'
            >
              Register
            </button>
          </form>
          <p className='mt-3 text-center'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-decoration-none fw-bold'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
