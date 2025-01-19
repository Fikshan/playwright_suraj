import { test, expect } from "playwright/test";

 const APIReqBody = require("../API Data/post_req_body.json");

test("Create Get api request using JSON file in playwright ", async ({request,}) => {
  const postAPIResponse = await request.post("/booking", {
    data: APIReqBody
  });

   //validate Status code
   console.log(await postAPIResponse.json());

   expect(postAPIResponse.status()).toBe(200);
   expect(postAPIResponse.ok()).toBeTruthy();

   //Validate response body
    const postAPIResponseBody  = await postAPIResponse.json();
    const bID = postAPIResponseBody.bookingid;

    expect(postAPIResponseBody.booking.firstname).toBe("testers talk playwright Suraj");
    expect(postAPIResponseBody.booking.lastname).toBe("testers talk api testing Maverick");

    //validate api response headers
    expect(postAPIResponse.headers().server).toBe("Cowboy");

    // validate api response nested json obj
    expect(postAPIResponseBody.booking.bookingdates.checkin).toBe("2018-01-01");
    expect(postAPIResponseBody.booking.bookingdates.checkout).toBe("2019-01-01");

    console.log("======================================================")

    //Create Get API request
    const getAPIResponse = await request.get(`/booking/${bID}`);

    console.log(await getAPIResponse.json());
    getAPIResponse.status().toBe(200);
    getAPIResponse.ok().toBeTruthy();

});
