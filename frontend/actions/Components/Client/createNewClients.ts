import { Person } from "../../../components/pages/ClientView";
import request, { Response } from "../../utils/request";

type CreateNewClientResponse = {
    success: boolean,
    errMsg: string
}

async function createNewClient(person: Person): Promise<CreateNewClientResponse> {
    let response: Response<CreateNewClientResponse>;
    response = await request({
                                method: "POST",
                                url: `/createClient`,
                                body: {
                                    updatedPerson: person
                                }
                            });

    return response.data;
}

export default createNewClient;