import request, { Response } from "./request";


async function search(query: string): Promise<ApiResponse> {
    // let response: Response<ApiResponse>;
    // response = await request({
    //                             method: "GET",
    //                             url: `query?query=${query}`
    //                         });

    // return response.data;
    return new Promise((res, rec) => {
      //@ts-ignore
        res(data);
    });
  }

const data = {
  "filters": [
    "count"
  ],
  "query": "michelin star restaurants",
  "result": {
    "count": {
      "max": 30,
      "min": 1
    },
    "data": {
      "AT": {
        "count": 1
      },
      "BE": {
        "count": 2
      },
      "CH": {
        "count": 3
      },
      "CN": {
        "count": 3
      },
      "DE": {
        "count": 10
      },
      "DK": {
        "count": 2
      },
      "ES": {
        "count": 11
      },
      "FR": {
        "count": 30
      },
      "GB": {
        "count": 7
      },
      "IT": {
        "count": 11
      },
      "JP": {
        "count": 30
      },
      "KR": {
        "count": 2
      },
      "NL": {
        "count": 2
      },
      "SE": {
        "count": 1
      },
      "SG": {
        "count": 3
      },
      "TW": {
        "count": 1
      },
      "US": {
        "count": 13
      }
    }
  },
  "success": true,
  "version": "1"
};

export default search;