import { test, expect } from "playwright/test";

test("Create POST api request using static request body in playwright", async ({
  request,
}) => {
  const postAPIResponse = await request.post("/booking", {
    data: {
      firstname: "Tester Suraj",
      lastname: "Mavericks",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "super bowls",
    },
  });

   //validate Status code
   console.log(await postAPIResponse.json());

   expect(postAPIResponse.status()).toBe(200);
   expect(postAPIResponse.ok()).toBeTruthy();

   //Validate response body
    const postAPIResponseBody  = await postAPIResponse.json();

    expect(postAPIResponseBody.booking.firstname).toBe("Tester Suraj");
    expect(postAPIResponseBody.booking.lastname).toBe("Mavericks");

    //validate api response headers
    expect(postAPIResponse.headers().server).toBe("Cowboy");

    // validate api response nested json obj
    expect(postAPIResponseBody.booking.bookingdates.checkin).toBe("2018-01-01");
    expect(postAPIResponseBody.booking.bookingdates.checkout).toBe("2019-01-01");
});
