import React, { useState } from 'react'
import {Input} from 'antd';

const {Search}  = Input;

function SearchFeature(props) {
    const [SearchItem, setSearchItem] = useState("")

    const onChangeSearch = (event)=>{
        setSearchItem(event.currentTarget.value);
        props.refreshFunction(event.currentTarget.value);

    }

    return (
        <div>
        <Search
            value={SearchItem}
            onChange={onChangeSearch}
            placeholder="Search..."
        />
        </div>
    )
}

export default SearchFeature
