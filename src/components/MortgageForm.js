import React, {Component} from 'react'

class MortgageForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userSalary: 0,
      partnerSalary: 0,
      interestRate: 0,
      mortgageLength: 0
    }
    this.handleUserSalaryChange = this.handleUserSalaryChange.bind(this);
    this.handlePartnerSalaryChange = this.handlePartnerSalaryChange.bind(this);
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
    this.handleMortgageLengthChange = this.handleMortgageLengthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    const userSalary = this.state.userSalary;
    const partnerSalary = this.state.partnerSalary;
    const interestRate = this.state.interestRate;
    const mortgageLength = this.state.mortgageLength;
    if (!userSalary || !partnerSalary || !interestRate || !mortgageLength) {
      return
    }

    this.props.onMortageSubmit({
      userSalary: userSalary,
      partnerSalary: partnerSalary,
      interestRate: interestRate,
      mortgageLength: mortgageLength
    });

    this.setState({
      userSalary: 0,
      partnerSalary: 0,
      interestRate: 0,
      mortgageLength: 0
    });
  }

  handleUserSalaryChange(event) {
    this.setState({
      userSalary: event.target.value
    })
  }

  handlePartnerSalaryChange(event) {
    this.setState({
      partnerSalary: event.target.value
    })
  }

  handleInterestRateChange(event) {
    this.setState({
      interestRate: event.target.value
    })
  }

  handleMortgageLengthChange(event) {
    this.setState({
      mortgageLength: event.target.value
    })
  }




  render(){
    return(
      <form className="MortgageForm" onSubmit={this.handleSubmit}>
      <input
      type="int"
      placeholder="Insert Salary"
      value={this.state.userSalary}
      onChange={this.handleUserSalaryChange} />
      <input
      type="int"
      placeholder="Insert Partner's Salary"
      value={this.state.partnerSalary}
      onChange={this.handlePartnerSalaryChange} />
      <input
      type="int"
      placeholder="Insert Interest Rate"
      value={this.state.interestRate}
      onChange={this.handleInterestRateChange} />
      <input
      type="int"
      placeholder="Insert Mortgage Length(in years)"
      value={this.state.mortgageLength}
      onChange={this.handleMortgageLengthChange} />
      <input type="submit" value="Post" />
      </form>
    )
  }
}

export default MortgageForm;
