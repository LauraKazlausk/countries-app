import { SpinnerDotted } from 'spinners-react';


import React from 'react'

const Spinner = () => {
    return (
        <div>
            <SpinnerDotted
                enabled={false}
                size='70%'
                color='#e61515'
                secondaryColor='#f7b7b7' />
        </div>
    )
}

export default Spinner
