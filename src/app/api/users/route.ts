import { NextResponse } from "next/server";

// export async function GET() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return NextResponse.json(data);

// }
export async function GET() {
  return Response.json({
    id: 1,
    title: "Sample post",
    random: Math.random(),
    time: new Date().toISOString()
  });
}
