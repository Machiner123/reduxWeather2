import React from 'react'
import { Sparklines, SparklinesLine, SparkLinesReferenceLine } from 'react-sparklines'

export default (props) => {
  return(
    <div>
    <Sparklines data={props.data} svgWidth={120} svgHeight={90} >
      <SparklinesLine color={props.color} />
      <SparkLinesReferenceLine type="avg" />
    </Sparklines>
  </div>
  )
}
