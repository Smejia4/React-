import React from 'react'
import { ChangeColor } from '../../ui/ChangeColor/ChangeColor';
import { Counter } from '../../ui/Counter/Counter';
import { Great } from '../../ui/Great/Great'
import './containerusestate.css'

export const ContainerUseState = () => {
  return (
    <section className='containerCounter'>
      <Counter />
      <Great />
      <ChangeColor />
    </section>
  )
}
