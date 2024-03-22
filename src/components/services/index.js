import axios from "axios";
import { getToken } from "../utils";

export async function getAll() {
  const token = getToken();

  let response;
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token} `,
      "Content-Type": `application/json`,
    },
  };
  try {
    response = await axios.get(
      "https://tutorial-apis.herokuapp.com/api/v1/feedbacks",
      config
    );
  } catch (error) {
    console.log(error);
  }

  return response.data;
}
