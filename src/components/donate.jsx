import React from 'react';
import { Alert } from "flowbite-react";

export default function Donate() {
  return (
    <Alert color='green' className='flex items-center'>
    <a className="font-medium" href="/donation">Info alert!</a> Change a few things up and try submitting again.
  </Alert>
  );
}
