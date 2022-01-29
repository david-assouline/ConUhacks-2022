import request, { Response } from "../../utils/request";

type ResponseType = {
    data: string[][]
}

async function getVaccinesList(): Promise<ResponseType> {
    let response: Response<ResponseType>;
    response = await request({
                                method: "GET",
                                url: `/getVaccines`
                            });

    if (response.status !== 200)
        throw new Error();

    return response.data;
}

export default getVaccinesList;