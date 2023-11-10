import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/userSlice';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const user = useSelector(selectUser);

    if(!user){
        return <Navigate to="/account" replace/>
    }
  return children;
}

export default PrivateRoute