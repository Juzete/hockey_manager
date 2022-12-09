import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { unauthorize } from '../../store/slices/authSlice';

const LogoutPage = () => {
    const dispatch = useDispatch()
    useAuth()

    useEffect(() => {
        dispatch(unauthorize())
    },[])
  return (
    <div></div>
  )
}

export default LogoutPage;