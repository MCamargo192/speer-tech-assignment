import { useState } from 'react';
import { useHistory } from "react-router-dom";

import styles from './WhiteBtn.module.css'

const WhiteBtn = props => {
    const history = useHistory();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const mouseMoveHandler = e => {
        e.persist();
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        setMousePosition({ x, y });
    }

    return (
        <button
            className={styles.button}
            style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px`, '--top': `${props.top || 40}%` }}
            onMouseMove={e => mouseMoveHandler(e)}
            onClick={() => history.push(props.href || '#')}
        >
            <span>{props.text}</span>
        </button>
    );
};

export default WhiteBtn;