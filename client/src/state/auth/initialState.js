// @flow

type StateT = {
  isAuthenticated: boolean,
  isAuthorized: boolean,
  authentication: {
    isConfirmed: boolean,
    inProgress: boolean,
    email: string,
    password: string,
    isEmailResent: boolean,
    failed: boolean
  },
  authorization: {
    inProgress?: boolean,
    email: string,
    password: string,
  },
  profile: {
    resetPasswordSuccess: boolean,
    changePasswordSuccess: boolean,
    inProgress: boolean
  },
  user: {
    role: string,
    email: string,
    userId: string
  },
  errors: Object,
};

const initialState = (): StateT => ({
  isAuthenticated: false,
  isAuthorized: false,
  authentication: {
    email: '',
    password: '',
    inProgress: false,
    isConfirmed: false,
    failed: false,
    isEmailResent: false,
  },
  authorization: {
    email: '',
    password: '',
    inProgress: false,
  },
  profile: {
    resetPasswordSuccess: false,
    changePasswordSuccess: false,
    inProgress: false
  },
  user: {
    role: "",
    email: "",
    userId: ""
  },
  errors: {},
});

export default initialState;
