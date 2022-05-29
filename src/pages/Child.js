import React from 'react';

const Child = (props,dataToShare) => {
    const dataToParent = "Hi im from child"

    return (
        <div border={1} onClick={()=>{dataToShare(dataToParent);alert('salut')}}>
            salut <br/>
            {props.data}
        </div>
    );
};

export default Child;
