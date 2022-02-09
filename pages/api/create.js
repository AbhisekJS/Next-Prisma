import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();
export default async function handle(req, res) {
  const { firstName, lastName, avatar, email } = req.body;

  const result = await prisma.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      avatar: `https://github.com/${avatar}.png`,
      email: email,
    },
  });
  res.json(result);
}
