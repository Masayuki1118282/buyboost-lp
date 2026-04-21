import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const gasUrl = process.env.GAS_URL;
  if (!gasUrl || gasUrl.includes("YOUR_SCRIPT_ID")) {
    return NextResponse.json({ error: "GAS URL not configured" }, { status: 500 });
  }

  const res = await fetch(gasUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    redirect: "follow",
  });

  if (!res.ok) {
    return NextResponse.json({ error: "スプレッドシートへの書き込みに失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
