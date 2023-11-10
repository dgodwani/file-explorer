import React, { useEffect, useRef, useState } from 'react'
import './index.css';

type Props = {
  children: React.ReactElement;
}

function ContextMenu({children}: Props) {

  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const showContextMenu = (e : any) => {
    e.preventDefault();
    setShowMenu(true);
  }

  const onRename = (name : string) => {
    // here we can add the tree traversal logic to find the node and rename
    console.log("Renamed: ", name);
    setShowMenu(false);
  }

  const onCopy = (name : string) => {
    console.log("Copied: ", name);
    setShowMenu(false);
  }

  const onDelete = (name : string) => {
    console.log("Deleted: ", name);
    setShowMenu(false);
  }

  
  const fileName = children?.props.children[1].props.children;

  return (
    <div onContextMenu={showContextMenu} ref={ref}>
      {children}
      {showMenu && <div className='context-menu'>
        <div onClick={() => onRename(fileName)}>Rename</div>
        <div onClick={() => onCopy(fileName)}>Copy</div>
        <div onClick={() => onDelete(fileName)}>Delete</div>
      </div>
      }
    </div>
  )
}

export default ContextMenu