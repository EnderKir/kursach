import React from "react";
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import './ResponseType.css';

import lowpass from '../../pictures/filters/lowpass.jpg';
import highpass from '../../pictures/filters/highpass.jpg';
import raised from '../../pictures/filters/raised.jpg';
import bandpass from '../../pictures/filters/bandpass.jpg';
import bandstop from '../../pictures/filters/bandstop.jpg';
import differentiator from '../../pictures/filters/differentiator.jpg';
import multiband from '../../pictures/filters/multiband.jpg';
import hilbert from '../../pictures/filters/hilbert.jpg';
import arbitrary from '../../pictures/filters/arbitrary.jpg';

function ResponseType({ type, handleType }) {
    const pictures = { lowpass, highpass, raised, bandpass, bandstop, differentiator, multiband, hilbert, arbitrary };

    return (
        <div className='container'>
            <div>
                <p className='title'>Response Type</p>
                <RadioGroup aria-label="response-type" name="response-type" value={type} onChange={(e) => handleType(e.target.value)}>
                    <FormControlLabel value="lowpass" control={<Radio/>} label="Lowpass"/>
                    <FormControlLabel value="raised" control={<Radio/>} label="Raised-cosine"/>
                    <FormControlLabel value="highpass" control={<Radio/>} label="Highpass"/>
                    <FormControlLabel value="bandpass" control={<Radio/>} label="Bandpass"/>
                    <FormControlLabel value="bandstop" control={<Radio/>} label="Bandstop"/>
                    <FormControlLabel value="differentiator" control={<Radio/>} label="Differentiator"/>
                    <FormControlLabel value="multiband" control={<Radio/>} label="Multiband"/>
                    <FormControlLabel value="hilbert" control={<Radio/>} label="Hilbert Transformer"/>
                    <FormControlLabel value="arbitrary" control={<Radio/>} label="Arbitrary Magnitude"/>
                </RadioGroup>
            </div>
            <img src={pictures[type]} alt="some value" className='filter-type-picture' />
        </div>
    );
}

export default ResponseType;
