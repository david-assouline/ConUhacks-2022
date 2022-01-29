import { Person } from "../../../components/pages/ClientView";
import request, { Response } from "../../utils/request";

type GetClientsResponse = {
    person: Person,
    infections: string[][]
}

async function getClientsInformation(firstName: string, middleInitials: string, lastName: string): Promise<GetClientsResponse> {
    let response1: Promise<Response<{person: Person}>>;
    let response2: Promise<Response<string[][]>>;

    response1 = request({
                            method: "GET",
                            url: `/clientInformation?firstName=${firstName}&middleInitial=${middleInitials}&lastName=${lastName}`
                        });
    
    response2 = request({
                            method: "GET",
                            url: `/getClientInfections?firstName=${firstName}&middleInitial=${middleInitials}&lastName=${lastName}`      
                        });
    
    return Promise.all([response1, response2])
        .then((values) => {
            console.log(values);
            return {
                person: values[0].data.person,
                infections: values[1].data
            }
        })
    // if (response1.status !== 200 || response2.status !== 200)
    //     throw new Error();

    // return response.data;
}

export default getClientsInformation;