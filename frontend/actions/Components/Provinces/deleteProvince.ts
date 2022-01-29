import request, { Response } from "../../utils/request";

type DeleteResponse = {
    success: boolean,
    errMsg: string
}

async function deleteProvince(provinceName: string): Promise<DeleteResponse> {
    let response: Response<DeleteResponse>;
    response = await request({
                                method: "POST",
                                url: `/deleteProvince`, 
                                body: {
                                    name: provinceName
                                }
                            });

    return response.data;
}

export default deleteProvince;