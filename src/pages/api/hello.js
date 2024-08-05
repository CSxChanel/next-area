// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ status: 200, statusCode: true, name: "John Doe" });
}
                