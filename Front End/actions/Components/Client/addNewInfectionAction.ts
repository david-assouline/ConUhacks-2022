import request, { Response } from "../../utils/request";

type AddNewInfectionResponse = {
    success: boolean,
    errMsg: string
}

async function addNewInfectionAction(firstName: string, middleInitials: string, lastName: string,  infectionDate: string, infectionType: string): Promise<AddNewInfectionResponse> {
    let response: Response<AddNewInfectionResponse>;
    response = await request({
                                method: "POST",
                                url: `/createInfection`, 
                                body: {
                                    firstName,
                                    middleInitial: middleInitials,
                                    lastName,
                                    infectionDate,
                                    infectionType
                                }
                            });

    return response.data;
}

export default addNewInfectionAction;