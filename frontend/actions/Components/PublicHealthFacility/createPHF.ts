import { PHF } from "../../../components/pages/PHFView";
import request, { Response } from "../../utils/request";

type CreateResponse = {
    success: boolean,
    errMsg: string
}

async function createPHF(phf: PHF): Promise<CreateResponse> {
    let response: Response<CreateResponse>;
    response = await request({
                                method: "POST",
                                url: `/createFacility`, 
                                body: {
                                    facility: phf
                                }
                            });

    // if (response.status !== 200)
    //     throw new Error();

    return response.data;
}

export default createPHF;