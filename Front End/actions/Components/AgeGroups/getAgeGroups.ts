import request, { Response } from "../../utils/request";

type ResponseType = {
    data: string[][]
}

async function getAgeGroups(): Promise<ResponseType> {
    let response: Response<ResponseType>;
    response = await request({
                                method: "GET",
                                url: `/getAgeGroups`
                            });

    return response.data;
}

export default getAgeGroups;