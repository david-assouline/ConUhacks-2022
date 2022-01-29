import request, { Response } from "../../utils/request";

type ResponseType = {
    data: string[][]
}

async function getPublicHealthWorker(): Promise<ResponseType> {
    let response: Response<ResponseType>;
    response = await request({
                                method: "GET",
                                url: `/getPHWList`
                            });

    return response.data;
}

export default getPublicHealthWorker;