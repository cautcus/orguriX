import React from 'react'
import LoginForm from './LoginForm'
import { Topnav } from "@/components/navbar/topnav";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Tawkto from '@/components/tawkto';

export default function Login() {
  return (
    <>
      <Tawkto/>
      <GoogleAnalytics/>
    <Topnav/>
    <div className='p-10'/>
    <LoginForm/>
    </>
  )
}
