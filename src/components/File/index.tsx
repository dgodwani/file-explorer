import React from 'react'
import { MenuItem } from '../Menu/types'
import Icon from "react-icons-kit";
import { file } from "react-icons-kit/feather/file";
import './index.css';
import ContextMenu from '../ContextMenu';

type Props = {
    data : MenuItem
}

const File = (props: Props) => {
  return (
    <ContextMenu>
      <div className='file'>
        <Icon icon={file}/>
        <div className='file-title'>{props.data.name}</div>
      </div>
    </ContextMenu>        
  )
}

export default File