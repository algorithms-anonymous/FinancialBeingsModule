// @flow

import React from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import { LOGIN } from "../../../constants/routes";
import Spinner from "../../common/Spinner/Spinner";

type PropsT = {
  auth: {
    isAuthenticated: boolean,
    authentication: {
      inProgress: boolean,
      failed: boolean,
      isConfirmed: boolean
    }
  }
};

const ActivateAccount = (props: PropsT) => {
  const { isConfirmed, failed, inProgress } = props.auth.authentication;

  const activationFailed = () => (
    <div>
      <div>
        Account activation token has expired.
      </div>
      <div>
        User with given activation token does not exist.
      </div>
      <div>
        <Link to={LOGIN}>
          Try Again
        </Link>
      </div>
    </div>
  );

  const activationSuccess = () => (
    <div>
      <h1>Thank You for Registering!</h1>
      <div>
        We emailed a confirmation link to{" "} Click the link to finish registering.
      </div>
      <div>
        <Link to={LOGIN}>
          Continue
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      {inProgress ? <Spinner /> : null}
      {failed ? activationFailed() : null}
      {isConfirmed ? activationSuccess() : null}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default compose(
  connect(
    mapStateToProps,
    null
  )
)(ActivateAccount);
