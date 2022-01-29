import { PHW } from "../../../components/pages/PHWView";
import request, { Response } from "../../utils/request";

type GetClientsResponse = {
    person: PHW
}

async function getPHWInformation(ssn: string): Promise<GetClientsResponse> {
    let response: Response<GetClientsResponse>;
    response = await request({
                                method: "GET",
                                url: `/phwInformation?ssn=${ssn}`
                            });

    return response.data;
}

export default getPHWInformation;