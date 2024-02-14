import { ChangeEvent, ReactElement } from "react";
import { EFormStatus } from "@/utils/enums";
import { TContactData } from "@/utils/types";
import { Form } from "formik"
import { email, emailPlaceHolder, emailTitle, name, namePlaceHolder, nameTitle, sendMessage, textArea } from "../ContactData"
import clsx from "clsx";

interface IProps {
  formStatus: EFormStatus;
  handleBlur: (event: ChangeEvent) => void;
  handleChange: (event: ChangeEvent) => void;
  isSubmitting: boolean;
  values: TContactData;
}

const ContactForm = ({
  formStatus,
  handleBlur,
  handleChange,
  isSubmitting,
  values,
}: IProps): ReactElement => (
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

    {formStatus === EFormStatus.ERROR && (
      <div>Alert, error</div>     // TODO Alert component
    )}

    {formStatus === EFormStatus.SENT ? (
      <div className="text-green-700">Sent</div>     // TODO Alert component
    ) : (
      <button
        className={clsx("self-start p-1 w-full sm:w-max", "buttonGradient")}
        disabled={isSubmitting}
        type="submit"
      >
        <div className={clsx("px-8 py-3 w-full h-full", "button")}>
          {sendMessage}
        </div>
      </button>
    )}
  </Form>
)

export default ContactForm;
