import * as React from 'react';
import './home.scss'

class Home extends React.Component<any, any>  {
  state: {
    emailData: {
      emailvalue: any[],
      error: boolean,
      invalidemails: any[],
      value: string
    }
  };
  sendContactEmailId: any;
  getCommaSeparateValue: any;
  arrayOfString: any;
  constructor(props: any) {
    super(props);
    this.state = {
      emailData: {
        emailvalue: [],
        error: false,
        invalidemails: [],
        value: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    console.log('dewfdew')
    this.setState({ emailData: { value: event.target.value } });
  }
  handleSubmit(event: any) {
    // console.log(this.state.eamilvalue);
  }
  checkEmailInput = (value: any) => {
    const regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let emails = value.replace(/\s/g, "").split(/,|;/);
    // console.log(emails);
    let invalidEmails: any[] = [];
    let validEmails: any[] = [];
    let masterError: boolean = false;
    for (let index = 0; index < emails.length; index++) {
      if (!regEx.test(emails[index])) {
        invalidEmails.push(emails[index])
        masterError = true;

      } else {
        validEmails.push(emails[index]);
      }
    }
    this.setState({
      emailData: {
        emailvalue: validEmails,
        error: masterError,
        invalidemails: invalidEmails,
        value: invalidEmails.toString()
      }
    }, () => { console.log(this.state); })
  }

  public render() {
    const invalidEmails = this.state.emailData.invalidemails.map(email => {
      return (<div><p>{email}</p></div>)
    })



    return (
      <React.Fragment>
        <div className="center">
          <input type="text" defaultValue={this.state.emailData.value} onBlur={e => this.checkEmailInput(e.target.value)} placeholder="enter all the emails"></input>


          {invalidEmails}

        </div>
      </React.Fragment>
    );
  }
}

export default Home;
