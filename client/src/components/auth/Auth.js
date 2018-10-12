// @flow

import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { parse } from 'qs';
import Login from "./views/Login";
import Register from "./views/Register";
import ChangePassword from "./views/ChangePassword";
import ResetPassword from "./views/ResetPassword";
import ActivateAccount from "./views/ActivateAccount";
import "./Auth.scss";
import {
  ACTIVATE_ACCOUNT,
  AUTH,
  CHANGE_PASSWORD,
  LOGIN,
  REGISTER,
  RESET_PASSWORD
} from "../../constants/routes";
import { verifyUser, fetchPasswordResetToken } from "../../state/auth/actions";

type PropsT = {
  verifyUser: Function,
  fetchPasswordResetToken: Function,
  location: {
    search: any
  }
};

class Auth extends PureComponent<PropsT, *> {
  componentDidMount() {
    const {
            location: { search },
            verifyUser,
            fetchPasswordResetToken
          } = this.props;

    const query = parse(search, {
      ignoreQueryPrefix: true
    });


    if (query.verify) {
      verifyUser(query);
    }

    if (query.reset) {
      fetchPasswordResetToken(query)
    }
  }

  render() {
    return (
      <div className="sm-body">
        <Switch>
          <Redirect exact from={AUTH} to={LOGIN} />
          <Route path={LOGIN} component={Login} />
          {/* <Route path={REGISTER} component={Register} /> */}
          {/* <Route path={RESET_PASSWORD} component={ResetPassword} /> */}
          {/* <Route path={CHANGE_PASSWORD} component={ChangePassword} /> */}
          {/* <Route path={ACTIVATE_ACCOUNT} component={ActivateAccount} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default compose(
  connect(mapStateToProps, { verifyUser, fetchPasswordResetToken })
)(Auth);
