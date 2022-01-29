import request, { Response } from "../../utils/request";

type ResponseType = {
    data: string[][]
}

async function getSchedule(ssn: string, startDate: string, endDate: string): Promise<ResponseType> {
    let response: Response<ResponseType>;
    response = await request({
                                method: "GET",
                                url: `/getAssignments?ssn=${ssn}&startDate=${startDate}&endDate=${endDate}`
                            });

    return response.data;
}

export default getSchedule;