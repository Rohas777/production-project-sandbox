import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode,
    container?: HTMLElement | string
}

const Portal:FC<PortalProps> = (props) => {
    const { children, container = document.getElementById('root') } = props;

    let foundedContainer;
    if (typeof container === 'string') {
        foundedContainer = document.querySelector(container);
    } else {
        foundedContainer = container;
    }

    return createPortal(children, foundedContainer);
};

export default Portal;
