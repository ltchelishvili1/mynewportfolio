import React, { useRef } from "react";

import emailjs from "@emailjs/browser";


import ContactLottie from "./ContactLottie.json";
import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../components/Validate/validators";

import { useState } from "react";

import BackDrop from '../../components/modal/BackDrop-component';

import AOS from "aos";
import "aos/dist/aos.css";

import {
  InputCont,
  ErrorText,
  Label,
  Input,
  Cont,
  Form,
  TextArea,
  Button,
  CustLottie,
} from "./ContactPage.styles";
import { useEffect } from "react";

const STATE_FORM = {
  user_name: {
    value: "",
    isvalid: false,
    isTouched: false,
  },
  user_email: {
    value: "",
    isvalid: false,
    isTouched: false,
  },
  message: {
    value: "",
    isvalid: false,
    isTouched: false,
  },
};

const ContactPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [state, setState] = useState(STATE_FORM);
  const open = () => {
    setModalOpen(true);
  };

  const close = () => {
    setModalOpen(false);
  };

  const handleChange = (event, validators) => {
    const temp = { ...state };
    temp[event.target.name].value = event.target.value;
    if (validators) {
      temp[event.target.name].isvalid = validate(
        event.target.value,
        validators
      );
    }
    setState(temp);
  };

  const handleTouch = (event) => {
    const stt = { ...state };
    stt[event.target.name].isTouched = true;
    setState(stt);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ddr6vua",
        "template_pqeimav",
        form.current,
        "dc8Ip44H2eLqLWKv5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const checkValidation = (attName, num) => {
    return num === 0
      ? !state[attName].isvalid && state[attName].isTouched
      : !state[attName].isvalid;
  };


  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Cont data-aos= 'zoom-out' >
      <BackDrop onClick={close} isVisible={modalOpen}></BackDrop>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <InputCont>
          <Input
            isValid={checkValidation("user_name", 0)}
            type="text"
            name="user_name"
            onChange={(event) =>
              handleChange(event, [VALIDATOR_MINLENGTH(3), VALIDATOR_REQUIRE()])
            }
            onBlur={handleTouch}
          />
          {checkValidation("user_name", 0) && (
            <ErrorText>Please Enter At Least 3 Characters</ErrorText>
          )}
        </InputCont>
        <Label>Email</Label>
        <InputCont>
          <Input
            isValid={checkValidation("user_email", 0)}
            type="email"
            name="user_email"
            onChange={(event) =>
              handleChange(event, [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()])
            }
            onBlur={handleTouch}
          />
          {checkValidation("user_email", 0) && (
            <ErrorText>Please Use Email</ErrorText>
          )}
        </InputCont>
        <Label>Message</Label>
        <InputCont>
          <TextArea
            isValid={checkValidation("message", 0)}
            name="message"
            onChange={(event) =>
              handleChange(event, [VALIDATOR_MINLENGTH(8), VALIDATOR_REQUIRE()])
            }
            onBlur={handleTouch}
          />
          {checkValidation("message", 0) && (
            <ErrorText>Please Enter At Least 8 Characters</ErrorText>
          )}
        </InputCont>
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => (modalOpen ? close() : open())}
          type="submit"
          disabled={
            checkValidation("user_name") ||
            checkValidation("user_email") ||
            checkValidation("message")
          }
        >
          Send
        </Button>
      </Form>
      <CustLottie
        animJSON={ContactLottie}
        styles={{ maxWidth: "420px", padding: "1rem 3rem", opacity: ".8" }}

      />
    </Cont>
  );
};

export default ContactPage;
