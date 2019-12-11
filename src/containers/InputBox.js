import React, {Component} from 'react'
import MortgageForm from '../components/MortgageForm.js'
import MortgageResults from '../components/MortgageResults'

class InputBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mortgageDetails: {},
      mortgageAmount: 0,
      monthlyPaymentResult: 0
    };
    this.handleMortgageSubmit = this.handleMortgageSubmit.bind(this);
  }

  handleMortgageSubmit(submittedMortgage) {
    this.setState({
        mortgageDetails: submittedMortgage
    })
    this.calculateMonthlyPayment(submittedMortgage);
  }

  calculateMortgage(mortgageDetails) {
    let result =(mortgageDetails.userSalary + mortgageDetails.partnerSalary) * 3;
    result *= (mortgageDetails.interestRate + 1);
    this.setState({
      mortgageAmount: result
    })
    return result
  }

  calculateMonthlyPayment(mortgageDetails) {
    let result =this.calculateMortgage(mortgageDetails);
    result /= (mortgageDetails.mortgageLength * 12);
    this.setState({
      monthlyPaymentResult: result
    })
  }

render() {
  return (
    <div className="InputBox">
      <h2>Input Mortgage Details</h2>
      <MortgageForm onMortageSubmit={this.handleMortgageSubmit} />
      <MortgageResults mortgageAmount={this.state.mortgageAmount}
      monthlyPaymentResult={this.state.monthlyPaymentResult} />
    </div>
  )
}

}
export default InputBox
