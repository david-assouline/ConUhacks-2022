import request, { Response } from "../../utils/request";

type ResponseType = {
    data: string[][]
}

async function getProvincesList(): Promise<ResponseType> {
    let response: Response<ResponseType>;
    response = await request({
                                method: "GET",
                                url: `/getProvinces`
                            });

    return response.data;
}

export default getProvincesList;