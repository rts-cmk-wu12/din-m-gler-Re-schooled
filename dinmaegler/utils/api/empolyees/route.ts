import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Hent medarbejderdata fra det eksterne API
    const response = await fetch("https://dinmaegler.onrender.com/agents");
    if (!response.ok) {
      return NextResponse.json(
        { message: "Fejl ved hentning af medarbejdere" },
        { status: 500 }
      );
    }

    // Parse JSON-data fra API'et
    const data = await response.json();

    // Returner medarbejderne som et JSON-response
    return NextResponse.json(data);
  } catch (error) {
    console.error("Fejl ved fetch af medarbejdere:", error);
    return NextResponse.json({ message: "Intern serverfejl" }, { status: 500 });
  }
}
