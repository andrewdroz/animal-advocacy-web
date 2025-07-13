import { JSONFilePreset } from "lowdb/node";

const db = await JSONFilePreset<Array<string>>('db.json', [])

export default defineEventHandler<{ body: { number: string } }>(async (event) => {
    const body = await readBody(event);
    await db.update(( mobileNumbers ) => mobileNumbers.push(body.number));
});
