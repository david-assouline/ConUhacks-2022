import { AgeGroup } from "../../../components/pages/AgeGroupView";
import { Appointment } from "../../../components/pages/AppointmentView";
import request, { Response } from "../../utils/request";

type UpdateResponse = {
    success: boolean,
    errMsg: string
}

async function updateAppointment(appointment: Appointment, updated: Appointment): Promise<UpdateResponse> {
    let response: Response<UpdateResponse>;
    response = await request({
                                method: "POST",
                                url: `/editAppointment`,
                                body: {
                                    updated,
                                    firstName: appointment.firstName,
                                    middleInitial: appointment.middleInitial,
                                    lastName: appointment.lastName,
                                    date: appointment.date
                                }
                            });

    return response.data;
}

export default updateAppointment;