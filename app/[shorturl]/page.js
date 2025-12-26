import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export const dynamic = "force-dynamic"


export default async function Page({ params }) {
    const { shorturl } = await params

    const client = await clientPromise;
    const db = client.db("vexo")
    const collection = db.collection("urls")

    const doc = await collection.findOne({ shorturl: shorturl })
    // console.log(doc)
    if (doc) {
        redirect(doc.url)
    }
    else {
        return <>
            <div className="min-h-[60vh] flex justify-center items-center flex-col gap-4">
                <h1 className="text-6xl font-bold text-red-600">404 | Not Found</h1>
                <h2>There's no short url for this link : <span className="font-semibold">{process.env.NEXT_PUBLIC_HOST}/{shorturl}</span></h2>
            </div>
        </>
    }


}