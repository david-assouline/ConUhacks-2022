import request, { Response } from "../../utils/request";

type ResponseType = {
    data: string[][]
}

async function getVariantTypes(): Promise<ResponseType> {
    let response: Response<ResponseType>;
    response = await request({
                                method: "GET",
                                url: `/getVariants`
                            });

    return response.data;
}

export default getVariantTypes;