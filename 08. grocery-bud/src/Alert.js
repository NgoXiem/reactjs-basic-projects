import React, { useEffect } from 'react'

const Alert = ({alert}) => {
  return (
    <div className="alert">
       <p className={alert.style}>{alert.name}</p>
    </div>
    )
}

export default Alert;
