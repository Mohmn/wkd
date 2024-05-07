
export default async function callJobsApi(limit = 10, offset = 0): Promise<ApiResponse<JobDetails>> {
    const body = JSON.stringify({
        limit, offset,
    });

    const requestOptions = {
        method: "POST",
        // headers: myHeaders,
        body
    };

    try {
        const resp = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        const res = await resp.json();
        return {
            data: res.jdList,
            totalCount: res.totalCount
        }
    } catch (err) {
        console.log('api error', err)
        throw err;
    }
}