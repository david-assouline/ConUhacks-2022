const baseURL = "https://80e0-174-91-18-75.ngrok.io/v1/";

export type Request = {
    body?: any,
    method: "GET" | "POST",
    url: string,
}

//If it is an error it should be dealt identified solely by the status of the response.
export type Response<T> = {
    status: number,
    data: T
}

//TODO add the authentication
async function request<T>(request: Request): Promise<Response<T>> {
    const { body, method, url } = request;
    let header = {};

    if (body) 
        header['Content-Type'] = 'application/json';

    try {
        const response = await fetch(baseURL + url, {
            method: method,
            headers: header,
            body: JSON.stringify(body)
        });


        // Here we check for different status codes to be returned and handle them
        if (response.status === 500) {
            // window.location.href = "https://morioh.com/p/30f9e4f6d5c5";
        }

        let data = await response.json();

        return {
            status: response.status,
            data
        }
    } catch(err) {
        //We would only reach here if there is something preventing the request from completing (i.e network failure)
        //window.location.href = "https://stackoverflow.com/questions/49165958/show-error-page-when-no-internet-html/49166030";
        console.log(err);
        return {
            status: 500,
            data: undefined
        }
    }
}

export default request; 