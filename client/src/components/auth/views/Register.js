// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { registerUser } from "../../../state/auth/actions";
import { LOGIN } from "../../../constants/routes";
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Spinner from '../../common/Spinner/Spinner';
import { required, email, password, passwordsMatch } from "../../../utilities/validators";

type PropsT = {
  registerUser: Function,
  handleSubmit: Function,
  invalid: boolean,
  pristine: boolean,
  auth: {
    authentication: {
      inProgress: boolean
    }
  },
  errors: {
    errorMessage: string
  }
}

export type FormDataT = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  dateOfBirth: string,
  countryOfResidence: string
}

class Register extends Component<PropsT, *> {

  onSubmit = (data: FormDataT) => {
    const { registerUser } = this.props;
    registerUser(data);
  };

  render() {
    const {
            handleSubmit, invalid,
            pristine,
            auth: { authentication : { inProgress } }
          } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)} noValidate>
          {inProgress ? <Spinner />:null}
          <h2>Registration</h2>
          <div>
            <Field
              id="firstName"
              name="firstName"
              type="text"
              label="First Name*"
              container
              component={Input}
              validate={[required]}
            />
          </div>
          <div>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              label="Last Name*"
              container
              component={Input}
              validate={[required]}
            />
          </div>
          <div>
            <Field
              id="email"
              name="email"
              type="email"
              label="Email*"
              container
              component={Input}
              validate={[required, email]}
            />
          </div>
          <div>
            <Field
              id="password"
              name="password"
              type="password"
              label="Password*"
              container
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
              container
              component={Input}
              validate={[required, password]}
            />
          </div>
          <Button type="submit" placeholder="Register" disabledBtn={pristine || invalid} />
        </form>
        <div>{"Already have an account?"}
          &nbsp;<Link to={LOGIN}>{"Log In"}</Link>
        </div>
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
    form: 'Register',
    validate: passwordsMatch,
  }),
  connect(mapStateToProps, {
    registerUser,
  })
)(Register);
