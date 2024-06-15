import React from 'react'

const TimeAndLocation = ({weather: {formattedLocalTime, name, country} }) => {
  return ( <div>
    <div className='flex items-center justify-center my-6'>
        <p className='text-xl font-extralight'>
            {formattedLocalTime}
        </p>
    </div>
    <div>
        <p className='flex items-center justify-center my-3'>
            {`${name}, ${country}`}
        </p>
    </div>
    </div>
  )
}

export default TimeAndLocation