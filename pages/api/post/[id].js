import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

export default async function handle(req, res) {
    console.log(req.query.id)
     try {await prisma.user.delete({
       where: {
         id: Number(req.query.id),
       },
     });
    res.status(201).send({"Message":"Deleted Successully"})
  }catch(e){
       res.status(500).json({error: e.message})
   };
    
}
