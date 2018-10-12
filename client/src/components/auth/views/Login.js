// @flow

import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import {
  REGISTER,
  RESET_PASSWORD,
} from "../../../constants/routes";
import { loginUser, clearAuthToken } from "../../../state/auth/actions";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Spinner from "../../common/Spinner/Spinner";
import { required, email, password } from "../../../utilities/validators";

type PropsT = {
  loginUser: Function,
  handleSubmit: Function,
  invalid: boolean,
  pristine: boolean,
  authorization: {
    inProgress: boolean
  },
  errors: {
    message: string
  }
};

export type FormDataT = {
  email: string,
  password: string
};

class Login extends Component<PropsT, *> {

  onSubmit = (data: FormDataT) => {
    const { loginUser } = this.props;
    loginUser({ payload: data });
  };

  render() {
    const {
            handleSubmit,
            invalid,
            pristine,
            authorization: { inProgress }
          } = this.props;

    return (
      <div>
        <form
          onSubmit={handleSubmit(this.onSubmit)}
          noValidate
        >
          {inProgress ? <Spinner /> : null}
          <h2>Log In</h2>
          <div>
            <Field
              id="email"
              name="email"
              type="email"
              label="Username or email*"
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
          <Link to={RESET_PASSWORD}>
            Forgot Password?
          </Link>
          <Button
            type="submit"
            placeholder="Log In"
            disabledBtn={pristine || invalid}
          />
        </form>
        <div>
          {" "}
          <div>
            {"Don 't have an account?"}
            &nbsp;
            <Link to={REGISTER}>{"Register"}</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authorization: state.auth.authorization,
  errors: state.auth.errors
});

export default compose(
  reduxForm({
    form: "Login"
  }),
  connect(
    mapStateToProps,
    {
      loginUser,
      clearAuthToken
    }
  )
)(Login);
