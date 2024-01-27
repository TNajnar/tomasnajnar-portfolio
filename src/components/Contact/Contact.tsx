import { ReactElement } from "react";
import { contactDescription, contactTitle, inputsData, sendMessage, textArea } from "./ContactData";
import clsx from "clsx";

const Contact = (): ReactElement => {
  return (
    <section className="py-20 w-full bg-gray-light-mode-2 dark:bg-gray-dark-1" id="contact">
      <div className={clsx("page-layout", "flex flex-col desktop:flex-row justify-between gap-11 w-full")}>
        <div className="flex flex-col gap-4 desktop:w-2/5">
          <h2 className="bg-gradient-to-r from-yellow from-70% to-gray-light-1 text-black dark:text-transparent bg-clip-text text-3xl">
            {contactTitle}
          </h2>
          <p className="text-xl text-gray-light-mode dark:text-gray">
            {contactDescription}
          </p>
        </div>
        <div className="flex flex-col gap-5 desktop:w-3/5">
          {inputsData.map(({id, label, name, placeHolder}) => 
            <label className="flex flex-col gap-2" key={id}>
              <span>{label}</span>
              <input
                className="p-3 bg-white border border-gray-light-mode rounded-lg text-black placeholder:text-black"
                name={name} 
                placeholder={placeHolder}
                required
                type="text"
              />
            </label>
          )}

          <label className="flex flex-col gap-2 pb-3">
            <span>{textArea.label}</span>
            <textarea
              className="p-3 h-36 bg-white border border-gray-light-mode rounded-lg text-black placeholder:text-black"
              name={textArea.name}
              placeholder={textArea.placeHolder}
              required
            />
          </label>
          
          <button className={clsx("self-start p-1 w-full sm:w-max", "buttonGradient")}>
            <div className={clsx("px-8 py-3 w-full h-full", "button")}>
              {sendMessage}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
