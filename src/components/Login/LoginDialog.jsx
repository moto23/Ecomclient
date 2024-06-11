import React, { useState, useEffect,useContext } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { authenticateLogin, authenticateSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
const StyledDialogContent = styled(DialogContent)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const StyledLoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Image = styled(Box)`
  background: #000000 url(https://t3.ftcdn.net/jpg/01/23/71/26/360_F_123712639_OG3kMWk85n0KR3wAFpSjj7eUGWroGjtU.webp) center 85% no-repeat;
  width: 45%;
  height: 88%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #FFFFFF;
    font-weight: 600;
  }
`;

const loginInitialValues = {
  username: '',
  password: '',
};

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
};

const accountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Continue Shopping Log In to Your Account!!',
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here",
    subHeading: 'Signup to get started',
  },
};

const LoginDialog = ({ open, setOpen }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const {setAccount} = useContext(DataContext);
  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) showError(true);
    else {
      showError(false);
      handleClose();
    }
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <StyledDialogContent>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          {account.view === 'login' ? (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Username" />
              {error && <Error>Please enter valid username/password</Error>}
              <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />

              <StyledLoginButton onClick={() => loginUser()}>Login</StyledLoginButton>
              <Text style={{ textAlign: 'center' }}>OR</Text>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>New to ShopEasy? Create an account</CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
              <StyledLoginButton onClick={() => signupUser()}>Continue</StyledLoginButton>
            </Wrapper>
          )}
        </Box>
      </StyledDialogContent>
    </Dialog>
  );
};

export default LoginDialog;
