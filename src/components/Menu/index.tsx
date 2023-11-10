import React from 'react'
import './index.css';
import { ContextMenu } from './types';
import Directory from '../Directory';

type Props = {
  data: ContextMenu
}

function Menu({data}: Props) {
  return (
    <div className='menu-container'>
      {data.data.map( menuItem => (
        <Directory data={menuItem} />
      ))}
    </div>
  )
}

export default Menu