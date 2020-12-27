import React from "react";
import {MenuItem, Select, TextField} from '@material-ui/core';

import './MagnitudeSpecifications.css';

function MagnitudeSpecifications({unity, setUnity, apass, astop, setApass, setAstop}) {

    return (
        <div className='freq-container'>
            <p className='design-title'>Frequency Specifications</p>
            <div className='param-block'>
                <p className='param-title'>Unity:</p>
                <Select
                    id="freq-unity"
                    className="select"
                    value={unity}
                    onChange={(e) => setUnity(e.target.value)}
                >
                    <MenuItem value={'db'}>dB</MenuItem>
                    <MenuItem value={'lin'}>Linear</MenuItem>
                </Select>
            </div>
            <div className='param-block'>
                <p className='param-title'>Apass:</p>
                <TextField id="fs" variant="outlined" size={"small"} value={apass}
                           onChange={(e) => setApass(e.target.value)}/>
            </div>
            <div className='param-block'>
                <p className='param-title'>Astop:</p>
                <TextField id="fpass" variant="outlined" size={"small"} value={astop}
                           onChange={(e) => setAstop(e.target.value)}/>
            </div>
        </div>
    );
}

export default MagnitudeSpecifications;
