import { JSONFilePreset } from "lowdb/node";

export default defineEventHandler<{ body: { number: string } }>(async (event) => {
    const db = await JSONFilePreset<Array<string>>('db.json', [])
    await db.read();
    return db.data;
});
