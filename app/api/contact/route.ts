import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const gasUrl = process.env.GAS_URL;
  if (!gasUrl || gasUrl.includes("YOUR_SCRIPT_ID")) {
    console.error("[contact] GAS_URL is not configured");
    return NextResponse.json({ error: "GAS URL not configured" }, { status: 500 });
  }

  try {
    const res = await fetch(gasUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    const text = await res.text();
    console.log("[contact] GAS response status:", res.status, "body:", text);
  } catch (err) {
    console.error("[contact] GAS fetch error:", err);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
