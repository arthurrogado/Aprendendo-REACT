import React from "react";
import FamiliaMembro from './FamiliaMembro'

export default (props) => {
    return (
        <div>
            {
                props.children.map( (child,i) => {
                    return React.cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}