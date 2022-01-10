import { useContext } from 'react';
import { AuthContext } from '../../hoc/authAuthorization';

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
