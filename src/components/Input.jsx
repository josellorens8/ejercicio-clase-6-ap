import React from 'react'
import './Input.css'

export const Input = ({etiqueta, tipo}) => {
  return (
    <>
    <label htmlFor={etiqueta}>{etiqueta}</label>
    <input type={tipo} id={etiqueta} />
    </>
  )
}
