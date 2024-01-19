import { ReactElement } from "react";
import { contactDescription, contactTitle, inputsData, sendMessage, textArea } from "./ContactData";
import clsx from "clsx";

const Contact = (): ReactElement => {
  return (
    <div className="py-20 w-full bg-gray-dark-1">
      <div className={clsx("page-layout", "flex justify-between gap-11 w-full")}>
        <div className="flex flex-col gap-4 w-2/5">
          <h2 className="bg-gradient-to-r from-yellow from-70% to-gray-light-1 text-transparent bg-clip-text text-3xl">
            {contactTitle}
          </h2>
          <p className="text-xl">
            {contactDescription}
          </p>
        </div>
        <div className="flex flex-col gap-5 w-3/5">
          {inputsData.map(({id, label, name, placeHolder}) => 
            <label className="flex flex-col gap-2" key={id}>
              <span>{label}</span>
              <input
                className="p-3 rounded-lg text-black placeholder:text-black"
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
              className="p-3 rounded-lg text-black placeholder:text-black h-36"
              name={textArea.name}
              placeholder={textArea.placeHolder}
              required
            />
          </label>
          
          <button className="self-start p-1 border bg-gradient-to-r from-yellow to-gray-light-1 hover:to-yellow hover:text-white">
            <div className="px-8 py-3 w-full h-full bg-black text-lg">
              {sendMessage}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
