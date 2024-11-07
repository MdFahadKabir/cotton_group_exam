export async function GET() {
  try {
    const response = await fetch(
      "https://cottonstock.com/frontendDeveloper.php",
      {
        method: "GET",
        headers: {
          Authorization: "bnjkvb6755fyVBH*(ghub",
        },
      }
    );

    if (!response.ok) {
      return new Response("Failed to fetch data", { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error: " + error.message, { status: 500 });
  }
}
