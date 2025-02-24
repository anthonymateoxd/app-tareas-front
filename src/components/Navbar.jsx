import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3 shadow-sm'>
      <div className='container'>
        <Link
          className='navbar-brand fw-bold text-warning'
          to='/'
        >
          Task Manager
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >
          <ul className='navbar-nav ms-auto align-items-center'>
            {isAuthenticated ? (
              <>
                <li className='nav-item'>
                  <span className='nav-link text-warning fw-semibold'>
                    Welcome, {user.username}
                  </span>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/add-tasks'
                  >
                    Add Tasks
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link text-danger'
                    to='/'
                    onClick={() => logout()}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/login'
                  >
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/register'
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
