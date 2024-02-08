import { TContactData } from "./types";
import * as yup from "yup";

export const contactSchema: yup.Schema<TContactData> = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  message: yup.string().required("Required"),
  name: yup.string().required("Required"),
});
