import { Person } from "../../../components/pages/ClientView";
import request, { Response } from "../../utils/request";

type UpdateClientInfoResponse = {
    success: boolean,
    errMsg: string
}

async function updateClientsInformation(firstName: string, middleInitials: string, lastName: string, update: Person): Promise<UpdateClientInfoResponse> {
    let response: Response<UpdateClientInfoResponse>;
    response = await request({
                                method: "POST",
                                url: `/editPerson`,
                                body: {
                                    firstName,
                                    middleInitial: middleInitials,
                                    lastName,
                                    updatedPerson: update
                                }
                            });


    return response.data;
}

export default updateClientsInformation;