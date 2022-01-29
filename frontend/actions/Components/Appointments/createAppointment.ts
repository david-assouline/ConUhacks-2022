import { AgeGroup } from "../../../components/pages/AgeGroupView";
import { Appointment } from "../../../components/pages/AppointmentView";
import request, { Response } from "../../utils/request";

type CreateResponse = {
    success: boolean,
    errMsg: string
}

async function createAppointment(appointment: Appointment): Promise<CreateResponse> {
    let response: Response<CreateResponse>;
    response = await request({
                                method: "POST",
                                url: `/createAppointment`,
                                body: {
                                    appointment: appointment
                                }
                            });

    return response.data;
}

export default createAppointment;