import * as React from 'react';
import './home.scss'
class Home extends React.Component<any, any>  {
  state: {
    value: string,
    emailData: {
      emailvalue: any[],
      error: boolean,
      invalidemails: any[],
    }
  };
  sendContactEmailId: any;
  getCommaSeparateValue: any;
  arrayOfString: any;
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      emailData: {
        emailvalue: [],
        error: false,
        invalidemails: [],
      }
    };
  }
  handleChange(event: any) {
    this.setState({ value: event.target.value }, () => { });
  }
  checkEmailInput = () => {
    let value = this.state.value
    const regEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emails = value.replace(/\s/g, "").split(/,|;/);
    let invalidEmails: any[] = [];
    let validEmails: any[] = [];
    let masterError: boolean = false;
    for (let index = 0; index < emails.length; index++) {
      if (emails[index].length > 0) {
        if (!regEx.test(emails[index])) {
          invalidEmails.push(emails[index])
          masterError = true;
        } else {
          validEmails.push(emails[index]);
        }
      }
    }
    this.setState({
      value: invalidEmails.toString(),
      emailData: {
        emailvalue: validEmails,
        error: masterError,
        invalidemails: invalidEmails,
      }
    }, () => { console.log(this.state); })
  }
  public render() {
    let i = 0;
    const invalidEmails = this.state.emailData.invalidemails.map(email => {
      return (<div><div><p>This are invalid emails</p></div><div className="error" key={i++}><p>{email}</p></div></div>)
    });
    const validEmails = this.state.emailData.emailvalue.map(email => {
      return (<table>
        <tr>
          <p>This are valid emails</p>
          <td className="data">
            {email}
          </td>
        </tr>
      </table>)
    });
    return (
      <React.Fragment>
        <div className="center">
          <input type="text" value={this.state.value} onChange={(e) => { this.handleChange(e) }} placeholder="enter all the emails"></input>
          {invalidEmails}
          <div className="passed">
            {validEmails}
          </div>
          <button onClick={() => this.checkEmailInput()} >VALIDATE</button>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;