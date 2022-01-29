import { Appointment } from "../../../components/pages/AppointmentView";
import request, { Response } from "../../utils/request";

type DeleteResponse = {
    success: boolean,
    errMsg: string
}

async function deleteAppointment(appointment: Appointment): Promise<DeleteResponse> {
    let response: Response<DeleteResponse>;
    response = await request({
                                method: "POST",
                                url: `/deleteAppointment`,
                                body: {
                                    firstName: appointment.firstName,
                                    middleInitial: appointment.middleInitial,
                                    lastName: appointment.lastName,
                                    date: appointment.date
                                }
                            });

    return response.data;
}

export default deleteAppointment;