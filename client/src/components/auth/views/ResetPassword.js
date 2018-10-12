// @flow

import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { resetPassword } from "../../../state/auth/actions";
import { email, required } from "../../../utilities/validators";

type PropsT = {
  resetPassword: Function,
  handleSubmit: Function,
  invalid: boolean,
  pristine: boolean,
  auth: {
    profile: {
      resetPasswordSuccess: boolean
    }
  },
  errors: {
    message: string
  }
}

export type FormDataT = {
  email: string,
}

class ResetPassword extends PureComponent<PropsT, *> {

  onSubmit = (data: FormDataT) => {
    const { resetPassword } = this.props;
    resetPassword(data);
  };

  render() {
    const {
            handleSubmit, invalid,
            pristine,
          } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)} noValidate>
          <h2>Forgot Password</h2>
          <p>{'Enter your registered email and we\'ll send instructions to get you back on feet.'}</p>
          <div>
            <Field
              id="email"
              name="email"
              type="email"
              label="Registered email*"
              container
              component={Input}
              validate={[required, email]}
            />
          </div>
          <Button type="submit" placeholder="Send Email" disabledBtn={pristine || invalid} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.auth.errors
});

export default compose(
  reduxForm({
    form: 'ResetPassword',
  }),
  connect(mapStateToProps, { resetPassword })
)(ResetPassword);
