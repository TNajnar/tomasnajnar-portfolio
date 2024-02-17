import { ChangeEvent, ReactElement } from "react";
import { EFormStatus } from "@/utils/enums";
import { TContactData } from "@/utils/types";
import { Form } from "formik"
import { email, emailPlaceHolder, emailTitle, name, namePlaceHolder, nameTitle, sendMessage, textArea } from "../ContactData"
import clsx from "clsx";
import Loader from "@/components/ui/Loader";
import { FaCheck } from "react-icons/fa";

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
      <div className="flex items-center gap-3 text-xl text-green-700">
        <span>Email was sent!</span>
        <FaCheck className="text-green-700" />
      </div>
    ) : (
      <button
        className={clsx("self-start p-1 w-full sm:w-contactButton", "buttonGradient")}
        disabled={isSubmitting}
        type="submit"
      >
        <div className={clsx("flex items-center justify-center px-8 py-3 w-full h-full", "button")}>
         {isSubmitting ? <Loader className="w-7 h-7" /> : sendMessage}
        </div>
      </button>
    )}
  </Form>
)

export default ContactForm;
