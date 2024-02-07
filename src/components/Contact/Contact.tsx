"use client"
import { ReactElement } from "react";
import { Form, Formik } from "formik";
import { contactSchema } from "@/utils/schema";
import { TContactValues } from "@/utils/types";
import postEmail from "@/api/postEmail";
import { contactDescription, contactTitle, email, emailPlaceHolder, emailTitle, name, namePlaceHolder, nameTitle, sendMessage, textArea } from "./ContactData";
import clsx from "clsx";

const initialValues: TContactValues = {
  email: '',
  message: '',
  name: '',
};

enum FormStatus {
  ERROR = 'error',
  SENT = 'sent',
  UNSENT = 'unsent',
}

const Contact = (): ReactElement => {
  const handleSubmit = async (values: TContactValues): Promise<void> => {
    console.log('values: ', values)
    try {
      const response = await postEmail(values);
      
      response.json();
    } catch (error) {
      console.error(`Failed to parse JSON response: ${error}`);
    }
  };
  
  return (
    <section className="py-20 w-full bg-gray-light-mode-2 dark:bg-gray-dark-1" id="contact">
      <div className={clsx("page-layout", "flex flex-col desktop:flex-row justify-between gap-11 w-full")}>
        <div className="flex flex-col gap-4 desktop:w-2/5">
          <h2 className="bg-gradient-to-r from-yellow from-70% to-gray-light-1 text-black dark:text-transparent bg-clip-text text-3xl">
            {contactTitle}
          </h2>
          <p className="text-base desktop:text-xl text-gray-light-mode dark:text-gray">
            {contactDescription}
          </p>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
          {({ isSubmitting, handleChange, handleBlur, values }) => (
            <Form className="flex flex-col gap-5 desktop:w-3/5">
              <label className="flex flex-col gap-2">
                <label>{nameTitle}</label>
                <input
                  className="input"
                  id={name}
                  name={name}
                  onChange={handleChange}
                  placeholder={namePlaceHolder}
                  required
                  type="text"
                  value={values.name}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span>{emailTitle}</span>
                <input
                  className="input"
                  id={email}
                  name={email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={emailPlaceHolder}
                  required
                  type="email"
                  value={values.email}
                />
              </label>
 
              <label className="flex flex-col gap-2 pb-3">
                <span>{textArea.label}</span>
                <textarea
                  className="p-3 h-36 bg-white border border-gray-light-mode rounded-lg text-black placeholder:text-black"
                  id={textArea.name}
                  name={textArea.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={textArea.placeHolder}
                  required
                  value={values.message}
                />
              </label>

              <button
                className={clsx("self-start p-1 w-full sm:w-max", "buttonGradient")}
                disabled={isSubmitting}
                type="submit"
              >
                <div className={clsx("px-8 py-3 w-full h-full", "button")}>
                  {sendMessage}
                </div>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
