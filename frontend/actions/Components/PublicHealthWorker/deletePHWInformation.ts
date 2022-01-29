import request, { Response } from "../../utils/request";

type DeleteResponse = {
    success: boolean,
    errMsg: string
}

async function deletePHWInformation(ssn: string): Promise<DeleteResponse> {
    let response: Response<DeleteResponse>;
    response = await request({
                                method: "POST",
                                url: `/deletePHW`,
                                body: {
                                    ssn
                                }
                            });

    return response.data;
}

export default deletePHWInformation;