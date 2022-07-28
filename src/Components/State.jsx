import React from 'react'

export default function State({ state, value, noborder }) {
    let classValue = "one-third "
    classValue += noborder && "no-border";
    return (
        <div className={classValue}>
            <div className="stat">{state}</div>
            <div className="stat-value">{value}</div>
        </div>
    )
}
