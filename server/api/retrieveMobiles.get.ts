import { JSONFilePreset } from "lowdb/node";

const db = await JSONFilePreset<Array<string>>('db.json', [])

export default defineEventHandler<{ body: { number: string } }>(async (event) => {
    await db.read();
    return db.data;
});
