import request, { Response } from "../../utils/request";

type DeleteResponse = {
    success: boolean,
    errMsg: string
}

async function deleteSchedule(ssn: string, dow: string, facilityName: string): Promise<DeleteResponse> {
    let response: Response<DeleteResponse>;
    response = await request({
                                method: "POST",
                                url: `/deleteAssignment`,
                                body: {
                                    ssn: ssn,
                                    date: dow,
                                    facility: facilityName
                                }
                            });

    return response.data;
}

export default deleteSchedule;