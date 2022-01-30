import request, { Response } from "./request";


async function search(query: string): Promise<ApiResponse> {
    let response: Response<ApiResponse>;
    response = await request({
                                method: "GET",
                                url: `query?query=${query}`
                            });

    return response.data;
  }

export default search;