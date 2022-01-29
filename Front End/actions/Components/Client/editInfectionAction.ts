import request, { Response } from "../../utils/request";

type EditClientInfoResponse = {
    success: boolean,
    errMsg: string
}

async function editInfectionAction(firstName: string, middleInitials: string, lastName: string, infectionDate: string, newInfectionDate: string, infectionType: string): Promise<EditClientInfoResponse> {
    let response: Response<EditClientInfoResponse>;
    response = await request({
                                method: "POST",
                                url: `/updateInfection`,
                                body: {
                                    firstName,
                                    middleInitial: middleInitials,
                                    lastName,
                                    infectionDate,
                                    newInfectionDate: newInfectionDate,
                                    typeOfInfectionName: infectionType
                                }
                            });

    return response.data;
}

export default editInfectionAction;