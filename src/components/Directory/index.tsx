import React, { useState } from 'react'
import { MenuItem, MenuItemType } from '../Menu/types'
import './index.css';
import File from '../File';
import { folder } from "react-icons-kit/feather/folder";
import { chevronsRight } from "react-icons-kit/feather/chevronsRight";
import { chevronsDown } from "react-icons-kit/feather/chevronsDown";
import Icon from "react-icons-kit";
import ContextMenu from '../ContextMenu';

type Props = {
    data: MenuItem
}

const Directory = (props: Props) => {

    const [collapsed, setCollapsed] = useState(props.data.collapsed ? true : false )

    if(!props.data){
        return null
    }

    if(props.data.type === MenuItemType.FILE){
        return <File data={props.data} />
    }

    const toggleExpland = ()=>{
        setCollapsed( current => !current)
    }

    

  return (
    <div className='directory'>
            <div className='title-container' onClick={toggleExpland} >
                <Icon icon={!collapsed ? chevronsDown: chevronsRight} />
                <Icon icon={folder} />
                <div className='title'>{props.data.name}</div>
            </div>
        {(props.data?.data && props.data?.data?.length && !collapsed) ?  
            <div className='directory-content' >
            {
                props.data?.data?.map( menuItem => {
                    return <Directory data={menuItem} key={menuItem.id}/>
                })
            }
        </div> : null}
    </div>
  )
}

export default Directory