import React from 'react'


function Indicator(props) {
    let image = props.image
    let index = image.id + 1
    let classList = image.active === true ? "indicator-btn indicator-btn-cur" : "indicator-btn"
    return (
        <button className={classList} onMouseEnter={props.showAtIndicator}>{index}</button>
    )
}

export default Indicator

