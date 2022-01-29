import { Vaccine } from "../../../components/pages/VaccineView";
import request, { Response } from "../../utils/request";

type GetClientsResponse = {
    vaccine: Vaccine
}

async function getVaccineInformation(ssn: string): Promise<GetClientsResponse> {
    let response: Response<GetClientsResponse>;
    // response = await request({
    //                             method: "GET",
    //                             url: `/getConversations`
    //                         });

    // if (response.status !== 200)
    //     throw new Error();

    // return response.data;

    //Deprecated, info is already gathered.
    let data = {
        vaccine: {
            name: "Pfizer",
            description: "Vaccine description....",
            dateOfApproval: "2021-11-21",
            dateOfSuspension: "2022-11-21"
        }
    }
 
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 1500)
    });
}

export default getVaccineInformation;