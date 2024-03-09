import { HttpResponse, http } from "msw";

export const handlers = [
  http.post("/api/login", async ({ params, request }) => {
    // console.log("params", params);
    // console.log("request", request);
    // console.log("request.body", request.body);

    let reqData;
    await request.json().then((data) => {
      // console.log("id", data.id);
      // console.log("pw", data.pw);
      // reqData = data;
      reqData = {
        status: "success",
        sessionId: "1234567890",
      };
    });

    return HttpResponse.json(reqData);
  }),
];
