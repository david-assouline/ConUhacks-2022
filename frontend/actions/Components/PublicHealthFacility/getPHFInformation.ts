import { PHF } from "../../../components/pages/PHFView";
import request, { Response } from "../../utils/request";

type GetClientsResponse = {
    facility: PHF
}

async function getPHFInformation(name: string): Promise<GetClientsResponse> {
    let response: Response<GetClientsResponse>;

    response = await request({
                                method: "GET",
                                url: `/facilityInformation?name=${encodeURI(name)}`,
                            });

    if (response.status !== 200)
        throw new Error();

    console.log(response);

    return response.data;
}

export default getPHFInformation;