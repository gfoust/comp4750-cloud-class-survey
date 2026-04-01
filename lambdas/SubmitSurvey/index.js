
export async function handler(event) {
  // This is just a place-holder; replace it with your actual lambda function
  return {
  statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Response recorded" }),
  };
}
