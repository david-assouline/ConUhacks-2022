import { Schedule } from "../../../components/molecules/EditAddSchedule";
import { PHW } from "../../../components/pages/PHWView";
import request, { Response } from "../../utils/request";

type CreateNewClientResponse = {
    success: boolean,
    errMsg: string
}

async function editSchedule(old: Schedule, newSchedule: Schedule, ssn: string): Promise<CreateNewClientResponse> {
    let response: Response<CreateNewClientResponse>;
    response = await request({
                                method: "POST",
                                url: `/editAssignment`,
                                body: {
                                    oldSchedule: old,
                                    newSchedule: newSchedule,
                                    ssn: ssn
                                }
                            });

    return response.data;
}

export default editSchedule;