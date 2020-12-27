import React from "react";
import {RadioGroup, FormControlLabel, Radio, TextField} from '@material-ui/core';

import './FilterOrder.css';

function FilterOrder({order, specOrder, handleOrder, handleSpecOrder}) {

    return (
        <div className='order-container'>
            <p className='design-title'>Filter Order</p>
            <div className='order-block-container'>
                <div className='block'>
                    <RadioGroup aria-label="response-type" name="response-type" value={order}
                                onChange={(e) => handleOrder(e.target.value)}>
                        <FormControlLabel value="spec" control={<Radio/>} label="Specify order"/>
                        <FormControlLabel value="min" control={<Radio/>} label="Minimum order"/>
                    </RadioGroup>
                </div>
                <div className='block'>
                    <TextField id="spec-order" variant="outlined" size={"small"} value={specOrder}
                               onChange={(e) => handleSpecOrder(e.target.value)} disabled={order === 'min'}/>
                </div>
            </div>
        </div>
    );
}

export default FilterOrder;
