import { test, expect } from "playwright/test";

 const APIReqBody = require("../API Data/post_req_body.json");

test("Create POST api request using JSON file in playwright ", async ({request,}) => {
  const postAPIResponse = await request.post("/booking", {
    data: APIReqBody
  });

   //validate Status code
   console.log(await postAPIResponse.json());

   expect(postAPIResponse.status()).toBe(200);
   expect(postAPIResponse.ok()).toBeTruthy();

   //Validate response body
    const postAPIResponseBody  = await postAPIResponse.json();

    expect(postAPIResponseBody.booking.firstname).toBe("testers talk playwright Suraj");
    expect(postAPIResponseBody.booking.lastname).toBe("testers talk api testing Maverick");

    //validate api response headers
    expect(postAPIResponse.headers().server).toBe("Cowboy");

    // validate api response nested json obj
    expect(postAPIResponseBody.booking.bookingdates.checkin).toBe("2018-01-01");
    expect(postAPIResponseBody.booking.bookingdates.checkout).toBe("2019-01-01");
});
