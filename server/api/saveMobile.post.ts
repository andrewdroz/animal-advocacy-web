import { JSONFilePreset } from "lowdb/node";

export default defineEventHandler<{ body: { number: string } }>(async (event) => {
    const db = await JSONFilePreset<Array<string>>('db.json', [])
    const body = await readBody(event);
    await db.update(( mobileNumbers ) => mobileNumbers.push(body.number));
});
