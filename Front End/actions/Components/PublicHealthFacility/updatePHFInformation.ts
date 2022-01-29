import { PHF } from "../../../components/pages/PHFView";
import request, { Response } from "../../utils/request";

type UpdateResponse = {
    success: boolean,
    errMsg: string
}

async function updatePHFInformation(name: string, update: PHF): Promise<UpdateResponse> {
    let response: Response<UpdateResponse>;
    response = await request({
                                method: "POST",
                                url: `/editFacility`,
                                body: {
                                    name: name,
                                    facility: update
                                }
                            });

    // if (response.status !== 200)
    //     throw new Error();

    return response.data;
}

export default updatePHFInformation;