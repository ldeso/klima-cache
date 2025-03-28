export async function GET(request) {
  const { searchParams } = new URL(request.url);
  if (process.env.KLIMA_API_KEY !== searchParams.get("api_key")) {
    return Response.json({ error: "Invalid API key" }, { status: 400 });
  }
  const id = searchParams.get("query_id");
  const key = process.env.DUNE_API_KEY;
  const url = `https://api.dune.com/api/v1/query/${id}/results?api_key=${key}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  const data = await res.json();
  return Response.json(data);
}
