import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button } from "antd";
import LeftContent from "../leftContent";
import Footer from "../footer";
import { CloseCircle, Google, GooglePlay, TickCircle, User } from "iconsax-react";
import { emailValidation, passValidation } from "../validation/registerValidation";
import { FcGoogle } from 'react-icons/fc'

// email must contains 
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

//password must have at least one lower case letter, one uppercase letter
//8-24 characters
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z]).{8,24}$/

export default function SignUp() {
  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password1, setPassword1] = useState('');
  const [validPassword1, setValidPassword1] = useState(false);
  const [pwd1Focus, setPwd1Focus] = useState(false);

  const [password2, setPassword2] = useState('');
  const [validPassword2, setValidPassword2] = useState(false);
  const [pwd2Focus, setPwd2Focus] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  //   useEffect (()=>{
  //     userRef.current.focus();
  //   })

  // useEffect for user email
  useEffect(() => {
    const isEmailValid = EMAIL_REGEX.test(email);
    setValidEmail(isEmailValid)
  }, [email])

  // useEffect for user password
  // when one of them change, the valid match will also check 
  useEffect(() => {
    const isPasswordValid = PASSWORD_REGEX.test(password1);
    setValidPassword1(isPasswordValid);
    const match = password1 === password2;
    setValidPassword2(match)
  }, [password1, password2])

  // useEffet() for error message
  // when user, password1, password2 changes, then will clear the error message
  useEffect(() => {
    setErrorMessage('');
  }, [email, password1, password2])

  const handleSubmit = async(e) => {
    alert("po don me bo diqka")
  }
  return (
    <Row gutter={[32, 0]} className="hp-authentication-page">
      <LeftContent />

      <Col lg={12} span={24} className="hp-py-sm-0 hp-py-md-64">
        <Row className="hp-h-100" align="middle" justify="center">
          <Col
            xxl={11}
            xl={15}
            lg={20}
            md={20}
            sm={24}
            className="hp-px-sm-8 hp-pt-24 hp-pb-48"
          >

            <span className="hp-d-block hp-p1-body hp-text-color-dark-0 hp-text-color-black-100 hp-font-weight-500 hp-mb-6">SIGN UP FOR FREE</span>
            <h1>Create Account</h1>

            <p ref={errorRef}>{errorMessage}</p>
            <Form
              layout="vertical"
              name="basic"
              className="hp-mt-sm-16 hp-mt-32"
              // onSubmit={handleSubmit}
              // onClick={onSubmit(handleSubmit)}
              onSubmitCapture={handleSubmit}
            >
              <Form.Item label="E-mail :" validateStatus={(emailFocus && !validEmail) ? "error" : "success"}
              >
                <Input
                  type="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  prefix={<User set="curved" className="remix-icon" size={16} />}
                  suffix={
                    email && emailFocus
                      ? (validEmail ?
                        <TickCircle className="remix-icon" style={{ color: 'green' }} size={16} />
                        :
                        <CloseCircle style={{ color: 'red' }} className="remix-icon" size={16} />)
                      : null
                  }
                  onFocus={() => setEmailFocus(true)}
                />
                {(emailFocus && !validEmail) ?
                  <span style={{ color: 'red', paddingLeft: '5px' }} >
                    {emailValidation(email)}
                  </span> : null}
              </Form.Item>

              <Form.Item label="Password :" validateStatus={!validPassword1 && pwd1Focus ? "error" : "success"}>
                <Input.Password
                  id="password"
                  onChange={(e) => setPassword1(e.target.value)}
                  ref={userRef}
                  autoComplete="off"
                  required
                  onFocus={() => setPwd1Focus(true)}
                />
                {(pwd1Focus && !validPassword1) ?
                  <div style={{ color: 'red', paddingLeft: '5px' }} >
                    {passValidation(password1)}
                  </div>
                  :
                  null
                }
              </Form.Item>

              <Form.Item label="Confirm Password :" validateStatus={!validPassword2 && pwd2Focus ? "error" : "success"}>
                <Input.Password id="confirm-password"
                  onChange={(e) => setPassword2(e.target.value)}
                  ref={userRef}
                  autoComplete="off"
                  required
                  onFocus={() => setPwd2Focus(true)}
                />
                {(pwd2Focus && !validPassword2) ?
                  <div style={{ color: 'red', paddingLeft: '5px' }} >
                    Passwords must match
                  </div>
                  :
                  null
                }
              </Form.Item>

              <Form.Item className="hp-mt-16 hp-mb-8">
                <Button block type="primary" htmlType="submit"
                  disabled={(!validEmail || !validPassword1 || !validPassword2) ? true : false}>
                  Sign up
                </Button>
              </Form.Item>
            </Form>
            <div className="hp-form-info hp-text-center hp-mb-4">
              <div style={{ display: 'flex' }} className="hp-mt-16 hp-mb-16">
                <div style={{ borderTop: '1px solid grey', width: '100%', height: '2px', margin: "auto 5px" }}></div>
                <div style={{ margin: "auto 20px" }}>OR</div>
                <div style={{ borderTop: '1px solid grey', width: '100%', height: '2px', margin: "auto 5px" }}></div>
              </div>
              <Button block type="primary"
                className="hp-btn-outline hp-text-color-black-100 hp-border-color-black-100 hp-hover-bg-black-100"
                htmlType="submit"
              >
                <FcGoogle size={20} style={{ marginRight: '7px' }} />Sign in with Google
              </Button>
            </div>
            <div className="hp-form-info hp-text-center">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
                Already have an account?
              </span>

              <Link
                to="/pages/authentication/login"
                className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
              >
                Login
              </Link>
            </div>
            <Footer />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
