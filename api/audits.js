export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://kf.kobotoolbox.org/api/v2/assets/${process.env.KOBO_ASSET_UID}/data/`,
      {
        headers: {
          Authorization: `Token ${process.env.KOBO_API_TOKEN}`,
        },
      },
    );

    const text = await response.text();

    console.log("STATUS:", response.status);
    console.log("BODY:", text.substring(0, 500));

    res.status(200).send(text);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
}
