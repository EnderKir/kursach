import React from "react";
import {MenuItem, Select, TextField} from '@material-ui/core';

import './FrequencySpecifications.css';

function FrequencySpecifications({unity, setUnity, fs, setFs, fpass, setFpass, fstop, setFstop}) {

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
                    <MenuItem value={'norm'}>Normalized (0 to 1)</MenuItem>
                    <MenuItem value={'hz'}>Hz</MenuItem>
                    <MenuItem value={'khz'}>kHz</MenuItem>
                    <MenuItem value={'mhz'}>MHz</MenuItem>
                    <MenuItem value={'ghz'}>GHz</MenuItem>
                </Select>
            </div>
            <div className='param-block'>
                <p className='param-title'>Fs:</p>
                <TextField id="fs" variant="outlined" size={"small"} value={fs}
                           onChange={(e) => setFs(e.target.value)}/>
            </div>
            <div className='param-block'>
                <p className='param-title'>Fpass:</p>
                <TextField id="fpass" variant="outlined" size={"small"} value={fpass}
                           onChange={(e) => setFpass(e.target.value)}/>
            </div>
            <div className='param-block'>
                <p className='param-title'>Fstop:</p>
                <TextField id="fstop" variant="outlined" size={"small"} value={fstop}
                           onChange={(e) => setFstop(e.target.value)}/>
            </div>
        </div>
    );
}

export default FrequencySpecifications;
