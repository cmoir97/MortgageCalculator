import React, {Component} from 'react'
import InputBox from '../containers/InputBox'

class MortgageResults extends Component{

render(){
  return(
    <div className="MortgageResults">
      <h2>{this.props.mortgageAmount}</h2>
    </div>
  )

}
}
export default MortgageResults
