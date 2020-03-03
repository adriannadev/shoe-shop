import React, {useState} from 'react'
import {Checkbox, Collapse } from 'antd';
const {Panel} = Collapse;


function CheckBox(props) {
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        //index is -1 if not checked
        if(currentIndex===-1){
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        props.handleFilters(newChecked);
    }
    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Category" key="1">
                {props.list&&props.list.map((value, index)=>(
                    <React.Fragment key={index}>
                        <Checkbox 
                        onChange={()=>handleToggle(value._id)}
                        type="checkbox"
                        checked = {checked.indexOf(value._id) === -1 ? false : true}
                         />
                         <span> {value.name} </span>
                    </React.Fragment>
                ))}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
