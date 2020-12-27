import React from "react";
import {TextField} from '@material-ui/core';

import './Options.css';

function Options({density, setDensity}) {

    return (
        <div className='options-container'>
            <p className='design-title'>Density Factor</p>
            <div className='options-block-container'>
                <div className='block'>
                    <TextField id="options" variant="outlined" size={"small"} value={density}
                               onChange={(e) => setDensity(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}

export default Options;
