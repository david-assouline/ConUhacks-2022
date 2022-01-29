import request, { Response } from "../../utils/request";

async function getMissingNurses(day): Promise<string[][]> {
    let response: Response<string[][]>;
    response = await request({
                                method: "GET",
                                url: `/getMissingNurses?startDay=${day}`
                            });

    return response.data;
}

export default getMissingNurses;