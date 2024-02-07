import { TContactValues } from "@/utils/types";

const endpoint = "/api/route"

const postEmail = async (contactValues: TContactValues): Promise<Response> => {
  try {
    const response = await fetch(endpoint, {
      body: JSON.stringify(contactValues),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`Failed to send login data. HTTP Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    throw new Error(`Failed to send login data: ${error}`);
  }
};

export default postEmail;
