import { PHW } from "../../../components/pages/PHWView";
import request, { Response } from "../../utils/request";

type CreateNewClientResponse = {
    success: boolean,
    errMsg: string
}

async function createPHW(phw: PHW): Promise<CreateNewClientResponse> {
    let response: Response<CreateNewClientResponse>;
    response = await request({
                                method: "POST",
                                url: `/createPHW`,
                                body: {
                                    updatedPerson: phw
                                }
                            });

    return response.data;
}

export default createPHW;