// @flow

import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { changePassword } from "../../../state/auth/actions";
import { password, passwordsMatch, required } from "../../../utilities/validators";

type PropsT = {
  changePassword: Function,
  handleSubmit: Function,
  invalid: boolean,
  pristine: boolean,
  auth: {
    profile: {
      changePasswordSuccess: boolean
    }
  },
  errors: {
    errorMessage: string
  }
}

export type FormDataT = {
  password: string,
}

class ChangePassword extends PureComponent<PropsT, *> {

  onSubmit = (data: FormDataT) => {
    const { changePassword } = this.props;
    changePassword({ token: localStorage.getItem('reset'), password: data.password } )
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
          <div>
            <Field
              id="password"
              name="password"
              type="password"
              label="Password*"
              component={Input}
              validate={[required, password]}
            />
          </div>
          <div>
            <Field
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              label="Confirm password*"
              component={Input}
              validate={[required, password]}
            />
          </div>
          <Button type="submit" placeholder="Change Password" disabledBtn={pristine || invalid} />
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
    form: 'ChangePassword',
    validate: passwordsMatch,
  }),
  connect(mapStateToProps, { changePassword })
)(ChangePassword);
