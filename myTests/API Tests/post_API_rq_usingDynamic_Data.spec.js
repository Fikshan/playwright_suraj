import { test, expect } from "playwright/test";
import {faker} from '@faker-js/faker';

const {DateTime}= require('luxon');

test("Create POST api request using dynamic request body in playwright", async ({request,}) => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalprice = faker.number.int(1000)

    const checkinDate = DateTime.now().toFormat('yyyy-MM-dd');
    const checkOutDate = DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');

  //Create POST API Request  
  const postAPIResponse = await request.post("/booking", 
{
    data: {
      firstname: firstName,
      lastname: lastName,
      totalprice: totalprice,
      depositpaid: true,
      bookingdates: {
        checkin: checkinDate,
        checkout: checkOutDate,
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

    expect(postAPIResponseBody.booking.firstname).toBe(firstName);
    expect(postAPIResponseBody.booking.lastname).toBe(lastName);

    //validate api response headers
    expect(postAPIResponse.headers().server).toBe("Cowboy");

    // validate api response nested json obj
    expect(postAPIResponseBody.booking.bookingdates.checkin).toBe(checkinDate);
    expect(postAPIResponseBody.booking.bookingdates.checkout).toBe(checkOutDate);
});
