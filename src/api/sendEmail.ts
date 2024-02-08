import { TContactData } from "../utils/types";

const apiEndpoint = 'api/email';

const sendEmail = async (contactData: TContactData): Promise<Response> => {
  try {
    const response = await fetch(apiEndpoint, {
      body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Failed to send login data. HTTP Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    throw new Error(`Failed to send login data: ${error}`);
  }
}

export default sendEmail;
