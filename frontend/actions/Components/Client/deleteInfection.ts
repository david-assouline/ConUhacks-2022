import { Person } from "../../../components/pages/ClientView";
import request, { Response } from "../../utils/request";

type DeleteClientInfoResponse = {
    success: boolean,
    errMsg: string
}

async function deleteClientsInformation(firstName: string, middleInitials: string, lastName: string, infectionDate: string): Promise<DeleteClientInfoResponse> {
    let response: Response<DeleteClientInfoResponse>;
    response = await request({
                                method: "POST",
                                url: `/deleteInfection`,
                                body: {
                                    firstName,
                                    middleInitial: middleInitials,
                                    lastName,
                                    infectionDate
                                }
                            });

    return response.data;
}

export default deleteClientsInformation;