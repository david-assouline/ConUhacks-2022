import { Province } from "../../../components/pages/ProvinceView";
import request, { Response } from "../../utils/request";

type CreateResponse = {
    success: boolean,
    errMsg: string
}

async function createProvince(province: Province): Promise<CreateResponse> {
    let response: Response<CreateResponse>;
    response = await request({
                                method: "POST",
                                url: `/createProvince`,
                                body: {
                                    province: province
                                }
                            });

    return response.data;
}

export default createProvince;