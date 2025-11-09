import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: ([
            {
                path: '/',
                Component: Home
            }
        ])
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: ([
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/signup',
                Component: SignUp
            }
        ])
    }
])
