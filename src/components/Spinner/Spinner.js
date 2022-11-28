import { SpinnerDotted } from 'spinners-react';


import React from 'react'

const Spinner = () => {
    return (
        <div>
            <SpinnerDotted
                enabled={false}
                size='70%'
                color='#595b5c'
                secondaryColor='#595b5c' />
        </div>
    )
}

export default Spinner
