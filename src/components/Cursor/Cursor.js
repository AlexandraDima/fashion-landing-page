import React,{useEffect, useState} from 'react';
import classNames from "classnames";
import './Cursor.css';

const Cursor  = () => {
    const [cursorState, handleMove] = useState({
        x: 0, 
        y: 0
    });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    
    useEffect(() => {
       addEventListeners();
       handleLinkHoverEvents();
       return () => removeEventListeners();
    },[]); 
    
    const addEventListeners = () => {
     document.addEventListener("mousemove", onMouseMove);
     document.addEventListener("mousedown", onMouseDown);
     document.addEventListener("mouseup", onMouseUp);
    };
    //Hover effect 
    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a, button, span").forEach(el => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    };
    const removeEventListeners = () => {
     document.removeEventListener("mousemove", onMouseMove);
     document.removeEventListener("mousedown", onMouseDown);
     document.removeEventListener("mouseup", onMouseUp);
     }; 

    const onMouseMove = (e) => {
        handleMove({
                x: e.clientX,
                y: e.clientY
        })
    }

    //Click the buttons 
    const onMouseDown = () => {
        setClicked(true);
    };
    
    const onMouseUp = () => {
        setClicked(false);
    };

    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--link-hovered': linkHovered
        }
    );
 
    return(
        <div className={cursorClasses}
        style={{left: `${cursorState.x}px`, top: `${cursorState.y}px`}}>
        </div>
)
}

export default Cursor;