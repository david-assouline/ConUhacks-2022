import { PHW } from "../../../components/pages/PHWView";
import request, { Response } from "../../utils/request";

type UpdateResponse = {
    success: boolean,
    errMsg: string
}

async function updatePHWInformation(person: PHW, update: PHW): Promise<UpdateResponse> {
    let response: Response<UpdateResponse>;
    response = await request({
                                method: "POST",
                                url: `/editPHW`,
                                body: {
                                    firstName: person.firstName, 
                                    middleInitial: person.middleInitial, 
                                    lastName: person.lastName, 
                                    updatedPerson: update
                                }
                            });

    return response.data;
}

export default updatePHWInformation;