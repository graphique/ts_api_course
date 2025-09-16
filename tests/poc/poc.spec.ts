import * as superTest from '../../api/apiClient';

describe("POC Tests", () => {
  describe("GET requests", () => {
    it("GET /posts", async () => {
      const response = await superTest.pocRequest.get("/posts");
      expect(response.statusCode).toBe(200);
      expect(response.body[0].id).toBe(1);
    });

    it("GET /commetns with query params", async () => {
      const response = await superTest.pocRequest
        .get("/comments")
        .query({ postId: 1, limit: 5 });
      console.log(response);
      expect(response.body[0].postId).toBe(1);
    });
  });

  describe("POST requests", () => {
    it("POST /posts", async () => {
      const data = {
        title: "My favourite animes",
        body: "some content",
        userId: 1,
      };
      const response = await superTest.pocRequest.post("/posts").send(data);
      console.log(response.body);
      expect(response.body.title).toBe(data.title);
    });
  });

  describe("PUT requests", () => {
    it("PUT /posts/{id}", async () => {
      const data = {
        title: "Updated title",
        body: "Updated body...",
        userId: 5,
      };
      const oldResponse = await superTest.pocRequest.get("/posts/1");
      const expectedTitle = oldResponse.body.title;
      const response = await superTest.pocRequest.put("/posts/1").send(data);
      console.log(response.body);
      expect(response.body.title).toBe(data.title);
      expect(response.body.title).not.toBe(expectedTitle);
    });
  });

  describe("PATCH requests", () => {
    it("PATCH /posts/{id}", async () => {
      const data = {
        title: "Updated title only",
      };
      const oldResponse = await superTest.pocRequest.get("/posts/1");
      const expectedTitle = oldResponse.body.title;
      const response = await superTest.pocRequest.patch("/posts/1").send(data);
      console.log(response.body);
      expect(response.body.title).toBe(data.title);
      expect(response.body.title).not.toBe(expectedTitle);
    });
  });

  describe("DELETE requests", () => {
    it("DELETE /posts/{id}", async () => {
      const response = await superTest.pocRequest.delete("/posts/1");
      console.log(response.body);
      const expectedResult = {};
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(expectedResult);
    });
  });
});
