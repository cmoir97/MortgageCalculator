import React, {Component} from 'react'
import InputBox from '../containers/InputBox'

class MortgageResults extends Component{

render(){
  return(
    <div className="MortgageResults">
      <h2>Maximum Mortgage Amount Available:{this.props.mortgageAmount}</h2>
      <h2>Calculated Monthly Payment:{this.props.monthlyPaymentResult}</h2>
    </div>
  )

}
}
export default MortgageResults
