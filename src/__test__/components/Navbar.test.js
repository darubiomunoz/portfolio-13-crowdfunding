// import React from "react";

// import { rest } from "msw";

// import { setupServer } from "msw/node";

// import { render, fireEvent, screen } from "../utils/renderConnected";

// import Navbar from "../../components/Navbar";

// import { apiResponse } from '../utils/apiResponse';

// export const handlers = [
//  rest.get("/api/data", (req, res, ctx) => {
//    return res(ctx.json(apiResponse), ctx.delay(0));
//  }),
// ];

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());

// describe('Navbar component tests', () => {
//   it("renders the burger menu?", async () => {
//     render(<Navbar />);

//     const burgerMenu = screen.getByTestId('burgerMenuTestId');
//     expect(burgerMenu).toBeInTheDocument();
//   });
// });

// afterEach(() => server.resetHandlers());

// afterAll(() => server.close());
