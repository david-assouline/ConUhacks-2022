import request, { Response } from "../../utils/request";

type ResponseType = {
    data: string[][]
}

async function getAppointmentList(): Promise<ResponseType> {
    let response: Response<ResponseType>;
    response = await request({
                                method: "GET",
                                url: `/getAppointments`
                            });

    return response.data;
}

export default getAppointmentList;