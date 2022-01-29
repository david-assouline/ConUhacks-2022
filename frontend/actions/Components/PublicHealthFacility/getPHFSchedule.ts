import request, { Response } from "../../utils/request";

async function getPHFSchedule(startDate: string, endDate: string, facilityName: string): Promise<string[][]> {
    let response: Response<string[][]>;
    response = await request({
                                method: "GET",
                                url: `/getPHFSchedule?startDate=${startDate}&endDate=${endDate}&facilityName=${facilityName}`
                            });

    return response.data;
}

export default getPHFSchedule;