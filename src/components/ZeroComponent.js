import React from 'react';
import useBotAnswer from "../myHooks/useBotAnswer";

// useBotAnswer() в компоненте испльзует useSelector, который обновляет компоненты,
// поэтому пусть обновляет самый простой компонент, я так думаю
const ZeroComponent = () => {
    useBotAnswer();
    return (
        <div style={{display: 'none'}}>
        </div>
    );
};

export default ZeroComponent;