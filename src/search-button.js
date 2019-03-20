'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
    <Button handleClick={() => alert('search')}>
        search
    </Button>
)

export default SearchButton