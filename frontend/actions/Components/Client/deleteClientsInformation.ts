import { Person } from "../../../components/pages/ClientView";
import request, { Response } from "../../utils/request";

type DeleteClientInfoResponse = {
    success: boolean,
    errMsg: string
}

async function deleteClientsInformation(firstName: string, middleInitials: string, lastName: string): Promise<DeleteClientInfoResponse> {
    let response: Response<DeleteClientInfoResponse>;
    response = await request({
                                method: "POST",
                                url: `/deleteClient`,
                                body: {
                                    firstName,
                                    middleInitial: middleInitials, 
                                    lastName
                                }
                            });

    return response.data;
}

export default deleteClientsInformation;