import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
        <h2>Sorry</h2>
        <p>That Page cannot be found</p>
        <Link to='/'>Back to the homepage...</Link>
    </>
};
