import { TInputData } from "@/utils/types";

export const contactDescription: string = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.";

export const contactTitle: string = "Contact";

export const sendMessage: string = "Send Message";

export const inputsData: Array<TInputData> = [
  { id: 1, label: "Name:*", name: "name", placeHolder: "Enter your name" },
  { id: 2, label: "Email:*", name: "email", placeHolder: "Enter your email" },
];

export const textArea: TInputData = {
  label: "Message:*",
  name: "message",
  placeHolder: "Type your message"
};

