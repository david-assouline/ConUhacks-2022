import { Province } from "../../../components/pages/ProvinceView";
import request, { Response } from "../../utils/request";

type UpdateResponse = {
    success: boolean,
    errMsg: string
}

async function updateProvince(provinceName: string, update: Province): Promise<UpdateResponse> {
    let response: Response<UpdateResponse>;
    response = await request({
                                method: "POST",
                                url: `/editProvince`,
                                body: {
                                    name: provinceName,
                                    province: update
                                }
                            });

    return response.data;
}

export default updateProvince;