import { Vaccine } from "../../../components/pages/VaccineView";
import request, { Response } from "../../utils/request";

type UpdateResponse = {
    success: boolean,
    errMsg: string
}

async function updateVaccineInformation(name: string, update: Vaccine): Promise<UpdateResponse> {
    let response: Response<UpdateResponse>;
    response = await request({
                                method: "POST",
                                url: `/editVaccine`,
                                body: {
                                    name: name,
                                    vaccine: update
                                }
                            });

    return response.data;
}

export default updateVaccineInformation;