"use client"
import { ReactElement, useState } from "react";
import ContactForm from "./components/ContactForm";
import { Formik, FormikHelpers } from "formik";
import sendEmail from "@/api/sendEmail";
import { contactSchema } from "@/utils/schema";
import { TContactData } from "@/utils/types";
import { EFormStatus } from "@/utils/enums";
import { contactDescription, contactTitle } from "./ContactData";
import clsx from "clsx";

const initialValues: TContactData = {
  email: '',
  message: '',
  name: '',
};

const Contact = (): ReactElement => {
  const [formStatus , setFormStatus] = useState<EFormStatus>(EFormStatus.UNSENT);

  const handleSubmit = async (
    contactData: TContactData, { resetForm }: FormikHelpers<TContactData>
  ): Promise<void> => {
    const response = await sendEmail(contactData);
    
    setFormStatus(response.ok ? EFormStatus.SENT : EFormStatus.ERROR);
    resetForm();
  };
  
  return (
    <section className="py-20 w-full desktop:h-contact bg-gray-light-mode-2 dark:bg-gray-dark-1" id="contact">
      <div className={clsx("page-layout", "flex flex-col desktop:flex-row justify-between gap-11 w-full")}>
        <div className="flex flex-col gap-4 desktop:w-2/5">
          <h2 className="bg-gradient-to-r from-yellow from-70% to-gray-light-1 text-black dark:text-transparent bg-clip-text text-3xl">
            {contactTitle}
          </h2>
          <p className="text-base desktop:text-xl text-gray-light-modeText dark:text-gray">
            {contactDescription}
          </p>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
          {({ isSubmitting, handleChange, handleBlur, values }) => (
            <ContactForm
              formStatus={formStatus}
              handleBlur={handleBlur}
              handleChange={handleChange}
              isSubmitting={isSubmitting}
              values={values}
            />
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
