export default async function handler(req, res) {
  res.status(200).json({
    asset: process.env.KOBO_ASSET_UID,
    tokenExists: !!process.env.KOBO_API_TOKEN,
  });
}