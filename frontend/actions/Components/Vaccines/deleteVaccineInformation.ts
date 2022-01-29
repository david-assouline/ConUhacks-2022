import request, { Response } from "../../utils/request";

type DeleteResponse = {
    success: boolean,
    errMsg: string
}

async function deleteVaccineInformation(name: string): Promise<DeleteResponse> {
    let response: Response<DeleteResponse>;
    response = await request({
        method: "POST",
        url: `/deleteVaccine`,
        body: {
            name: name
        }
    });

    return response.data;
}

export default deleteVaccineInformation;