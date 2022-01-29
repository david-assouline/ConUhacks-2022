import request, { Response } from "../../utils/request";

async function getNurseReport(): Promise<string[][]> {
    let response: Response<{data: string[][]}>;
    response = await request({
                                method: "GET",
                                url: `/getNurseReport`
                            });


    return response.data.data;
}

export default getNurseReport;