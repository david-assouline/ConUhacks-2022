import { Vaccine } from "../../../components/pages/VaccineView";
import request, { Response } from "../../utils/request";

type CreateResponse = {
    success: boolean,
    errMsg: string
}

async function createVaccine(vaccine: Vaccine): Promise<CreateResponse> {
    let response: Response<CreateResponse>;
    response = await request({
                                method: "POST",
                                url: `/createVaccine`,
                                body: {
                                    vaccine: vaccine
                                }
                            });

    return response.data;
}

export default createVaccine;