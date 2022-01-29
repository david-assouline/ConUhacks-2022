import request, { Response } from "../../utils/request";

type DeleteResponse = {
    success: boolean,
    errMsg: string
}

async function deleteVariantType(variantName: string): Promise<DeleteResponse> {
    let response: Response<DeleteResponse>;
    response = await request({
                                method: "POST",
                                url: `/deleteVariantType`,
                                body: {
                                    name: variantName
                                }
                            });

    return response.data;
}

export default deleteVariantType;