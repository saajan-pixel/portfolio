import { useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import msgEmail from "../../assets/svg/email.svg";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_dca96jb",
        "template_5qhterj",
        form.current,
        "adCzmnb0bgA9mfVWj"
      )
      .then(
        () => {
          reset();
          toast("Message sent successfully !!");
        },
        (error) => {
          toast("Something went wrong !!");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact.</h1>
      <div className="contact-wrapper">
        <div className="left">
          <img src={msgEmail} width="100%" alt="cnt-img" />
        </div>
        <div className="right">
          <div className="right-wrapper">
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <input
                type="text"
                placeholder="User name.."
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="color-red">User Name is required</span>
              )}
              <input
                type="email"
                placeholder="Email.."
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="color-red">Email is required</span>
              )}
              <textarea
                rows="20"
                placeholder="Message"
                name="message"
              ></textarea>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
