import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const ProtectedPage = ({ children }) => {
    const [user, loading] = useAuthState(auth);
        let location = useLocation();
        if (loading) {
            return (
              <div className='text-center text-black'>
                <p>Initialising...</p>
              </div>
            );
          }
        if (!user) {
          
          return <Navigate to="/login" state={{ from: location }} replace />;
        }
      
        return children;
      
};

export default ProtectedPage;