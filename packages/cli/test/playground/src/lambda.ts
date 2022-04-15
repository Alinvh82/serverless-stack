import { APIGatewayProxyResult } from "aws-lambda";

export async function main(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  console.log("123");
  return {
    statusCode: 200,
    body: "hi",
  };
}
