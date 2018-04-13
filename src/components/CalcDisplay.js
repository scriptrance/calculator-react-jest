/**
 * The CalcDisplay class is a component that renders as a textarea that holds
 * the appropriate calculated value based on the buttons clicked
 *
 */

import React,{Component} from 'react'

export default class CalcDisplay extends Component{
  constructor(props){
    super(props);
    this.props = props;

  }
  /**
  * This method is used to render and display the textarea component
  *
  * @return textarea -  element displaying the appropriate calculated value
  *
  */
  render(){
    return(
      <textarea className="calc-display" value={this.props.value}/>
    )
  }
}
