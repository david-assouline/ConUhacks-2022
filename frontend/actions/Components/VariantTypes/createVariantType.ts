import request, { Response } from "../../utils/request";

type CreateNewClientResponse = {
    success: boolean,
    errMsg: string
}

async function createVariantType(variantName: string): Promise<CreateNewClientResponse> {
    let response: Response<CreateNewClientResponse>;
    response = await request({
                                method: "POST",
                                url: `/createVariantType`,
                                body: {
                                    name: variantName
                                }
                            });

    return response.data;
}

export default createVariantType;