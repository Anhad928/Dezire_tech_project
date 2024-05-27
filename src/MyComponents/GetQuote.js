import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import './GetQuote.css';

const GetQuote = () => {
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "8a6a84fa-b0b9-45b7-9e10-6192c151baac"; // Replace with your actual access key

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Dezire Tech",
      subject: "New Quote Request from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <section id="get-quote" className="get-quote">
      <div className="highlight-box">
        <h2>Get a Quote</h2>
        <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: true })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              {...register("phone")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              {...register("message", { required: true })}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>

        {result && (
          <div className={`result-message ${isSuccess ? 'success' : 'error'}`}>
            {result}
          </div>
        )}
      </div>
    </section>
  );
};

export default GetQuote;
