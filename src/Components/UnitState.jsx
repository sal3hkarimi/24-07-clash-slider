import React from 'react'
import State from './State'

export default function UnitState({ units, name }) {
    const states = units.map((unit, index) => <State
        key={index}
        state={unit.state}
        value={unit.value}
        noborder={index === units.length - 1}
    />)


    return (
        <div className={`azim clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            {states}
        </div>
    )
}

// return (
//     (index == (units.length - 1)) ?
//         <State key={index} state={unit.state} value={unit.value} noborder={"no-border"} /> :
//         <State key={index} state={unit.state} value={unit.value} />
// )