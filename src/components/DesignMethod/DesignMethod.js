import React from "react";
import {Select, MenuItem, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';

import './DesignMethod.css';

function DesignMethod({mainMethod, handleMain, IIFMethod, FIRMethod, handleMethod}) {

    return (
        <div className='design-container'>
            <p className='design-title'>Design Methods</p>
            <div className='design-block-container'>
                <div className='block'>
                    <RadioGroup aria-label="response-type" name="response-type" value={mainMethod}
                                onChange={(e) => handleMain(e.target.value)}>
                        <FormControlLabel value="iir" control={<Radio/>} label="IIR"/>
                        <FormControlLabel value="fir" control={<Radio/>} label="FIR"/>
                    </RadioGroup>
                </div>
                <div className='block'>
                    <Select
                        id="IIR"
                        className="select"
                        value={IIFMethod}
                        onChange={(e) => handleMethod(e.target.value)}
                        disabled={mainMethod === 'fir'}
                    >
                        <MenuItem value={'butterworth'}>Butterworth</MenuItem>
                        <MenuItem value={'chebush-2'}>Chebyshev Type 1</MenuItem>
                        <MenuItem value={'chebush-1'}>Chebyshev Type 2</MenuItem>
                        <MenuItem value={'elliptic'}>Elliptic</MenuItem>
                        <MenuItem value={'flat'}>Maximally Flat</MenuItem>
                    </Select>
                    <Select
                        id="FIR"
                        className="select"
                        value={FIRMethod}
                        onChange={(e) => handleMethod(e.target.value)}
                        disabled={mainMethod === 'iir'}
                    >
                        <MenuItem value={'equiripple'}>Equiripple</MenuItem>
                        <MenuItem value={'ls'}>Least Squares</MenuItem>
                        <MenuItem value={'window'}>Window</MenuItem>
                        <MenuItem value={'constr-ls'}>Constr. Least Squares</MenuItem>
                        <MenuItem value={'complex-equiripple'}>Complex Equiripple</MenuItem>
                        <MenuItem value={'flat'}>Maximally Flat</MenuItem>
                    </Select>
                </div>
            </div>
        </div>
    );
}

export default DesignMethod;
