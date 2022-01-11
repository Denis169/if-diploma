import { useContext } from 'react';
import { AuthContext } from '../../hoc/AuthAuthorization';

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
