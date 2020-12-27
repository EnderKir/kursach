import React, {useState} from "react";
import './App.css';

import ResponseType from "../ResponseType/ResponseType.js";
import DesignMethod from "../DesignMethod/DesignMethod";
import FilterOrder from "../FilterOrder/FilterOlder";
import Options from "../Options/Options";
import FrequencySpecifications from "../FrequencySpecifications/FrequencySpecifications";
import MagnitudeSpecifications from "../MagnitudeSpecifications/MagnitudeSpecifications";

function App() {
    const [responseType, setResponseType] = useState('lowpass');
    const [designMethodMain, setDesignMethodMain] = useState('iir');
    const [IIFMethod, setIFFMethod] = useState('butterworth');
    const [FIRMethod, setFIRMethod] = useState('equiripple');
    const [order, setOrder] = useState('min');
    const [specOrder, setSpecOrder] = useState(10);
    const [densityFactor, setDensityFactor] = useState(20);


    // FrequencySpecifications
    const [unity, setUnity] = useState('hz');
    const [fs, setFs] = useState(48000);
    const [fpass, setFpass] = useState(9600);
    const [fstop, setFstop] = useState(12000);

    // Magnitude Specifications
    const [magUnity, setMagUnity] = useState('db');
    const [apass, setApass] = useState(48000);
    const [astop, setAstop] = useState(9600);

    const handleMethod = (value) => {
        if (designMethodMain === 'iir') {
            setIFFMethod(value);
        } else {
            setFIRMethod(value);
        }
    };

    return (
        <div className="app">
            <ResponseType type={responseType} handleType={(value) => setResponseType(value)}/>
            <div className='block-container'>
                <DesignMethod mainMethod={designMethodMain} handleMain={(value) => setDesignMethodMain(value)}
                              IIFMethod={IIFMethod} FIRMethod={FIRMethod} handleMethod={handleMethod}/>
                <FilterOrder order={order} handleOrder={setOrder} specOrder={specOrder} handleSpecOrder={setSpecOrder}/>
                <Options density={densityFactor} setDensity={setDensityFactor}/>
                <FrequencySpecifications unity={unity} setUnity={setUnity} fs={fs} setFs={setFs} fpass={fpass}
                                         setFpass={setFpass} fstop={fstop} setFstop={setFstop}/>
                <MagnitudeSpecifications unity={magUnity} setUnity={setMagUnity} apass={apass} astop={astop} setApass={setApass} setAstop={setAstop} />
            </div>
        </div>
    );
}

export default App;
