import request, { Response } from "../../utils/request";

type GetClientsResponse = {
    data: string[][]
}

async function getClients(): Promise<GetClientsResponse> {
    let response: Response<GetClientsResponse>;
    response = await request({
                                method: "GET",
                                url: `/getClients`
                            });

    if (response.status !== 200)
        throw new Error();

    return response.data;
}

export default getClients;