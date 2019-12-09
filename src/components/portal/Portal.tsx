import React, {useEffect} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  getContainer?: Function;
  children: React.ReactNode,
}

export const Portal = (props: PortalProps) =>  {
  const container = props.getContainer
    ? props.getContainer()
    : document.getElementsByTagName('body');
  const element = document.createElement('div');
  
  useEffect(() => {
    insertElement();
    return () => {
      removeContainer()
    };
  }, []);

  const insertElement = () => {
    container.appendChild(element);
  }

  const removeContainer = () => {
    if (element) {
      container.removeChild(element);
    }
  }

  if (container) {
    return createPortal(props.children, element);
  } else {
    return null;
  }
}