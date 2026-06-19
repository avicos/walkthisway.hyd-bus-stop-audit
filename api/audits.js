export default async function handler(req, res) {
  try {
    const url =
      `https://kf.kobotoolbox.org/api/v2/assets/${process.env.KOBO_ASSET_UID}/`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Token ${process.env.KOBO_API_TOKEN}`,
      },
    });

    const text = await response.text();

    res.status(response.status).send(text);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}