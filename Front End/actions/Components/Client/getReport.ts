import { ClientOutput } from "../../../components/organism/ClientBookings";
import request, { Response } from "../../utils/request";

async function getReport(firstName: string, middleInitial: string, lastName: string): Promise<ClientOutput> {
    let response: Response<ClientOutput>;
    response = await request({
                                method: "GET",
                                url: `/getBookingInformation?firstName=${firstName}&middleInitial=${middleInitial}&lastName=${lastName}`
                            });

    return response.data;
}

export default getReport;