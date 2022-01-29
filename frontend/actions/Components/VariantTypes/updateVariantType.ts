import request, { Response } from "../../utils/request";

type UpdateResponse = {
    success: boolean,
    errMsg: string
}

async function updateVariantType(variantName: string, newVariantName: string): Promise<UpdateResponse> {
    let response: Response<UpdateResponse>;
    response = await request({
                                method: "POST",
                                url: `/editVariantType`,
                                body: {
                                    name: variantName,
                                    newName: newVariantName
                                }
                            });

    return response.data;
}

export default updateVariantType;