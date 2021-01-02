import React from 'react';
import Region from '../Region/Region';
import regionsData from '../../regionsData'


function PolandMap() {
    const regions = regionsData.map((region,i )=> <Region key={`a${i}`} id={region.id} d={region.d} />)

    return (
        <div className="map-box">
            <svg
                version="1.0"
                width="100%"
                height ="100%"
                viewBox="0 0 500 500"
                id="svg">
                {regions}
            </svg>
        </div>
    )
}




export default PolandMap;
