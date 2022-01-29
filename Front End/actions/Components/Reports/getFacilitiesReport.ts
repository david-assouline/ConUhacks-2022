import request, { Response } from "../../utils/request";

async function getFacilitiesReport(): Promise<string[][]> {
    let response: Response<{data: string[][]}>;
    response = await request({
                                method: "GET",
                                url: `/getFacilitiesReport`
                            });

    return response.data.data;
}

export default getFacilitiesReport;