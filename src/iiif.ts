import { create } from "iiif-hss/node-client";
import { join } from "node:path";
import { cwd } from "process";
import { readFile } from "fs/promises";
import { Database, open } from "sqlite";
import sqlite3 from "sqlite3";

export const client = create(join(cwd(), "public"));

export async function loadJson<T>(name: string): Promise<T> {
  const text = await readFile(name, "utf8");
  return JSON.parse(text);
}

export async function loadManifest(manifestSlug?: string) {
  if (!manifestSlug) {
    throw new Error("No manifest slug provided");
  }
  const loaded = await client.loadManifest(manifestSlug);
  let manifest;
  if (loaded.manifest) {
    return await loadJson(loaded.manifest);
  }
  return await fetch(loaded.id).then((r) => r.json());
}

let state: { db: Database<sqlite3.Database> | null } = { db: null };
export async function getDatabase() {
  if (!state.db) {
    const dbFile = client.endpoints["manifests.db"];
    state.db = await open({
      filename: dbFile,
      driver: sqlite3.Database,
    });
  }
  return state.db;

  // const search = Astro.url.searchParams.get("q")! || "";
  // let results = [];
  //
  // if (search) {
  //   const dbFile = client.endpoints["manifests.db"];
  //   const db = new Database(dbFile);
  //
  //   results = db
  //     .query(
  //       `
  //     select m.*, COUNT(m.id) as hits
  //     from manifests m
  //              join main.topics_manifests tm on m.id = tm.manifest_id
  //              join main.topics t on tm.topic_id = t.id
  //     where m.label LIKE '%' || $search || '%'
  //        or t.label LIKE '%' || $search || '%'
  //     group by m.id
  //     order by hits desc
  //     limit 20
  // `,
  //     )
  //     .all({
  //       $search: search,
  //     } as any);
  // }
}

export async function getSearchQuery() {
  const db = await getDatabase();
  return db.prepare(
    `select m.*, COUNT(*) as hits 
       from manifests m
                join topics_manifests tm on m.id = tm.manifest_id
                join topics t on tm.topic_id = t.id
       where m.label LIKE '%' || $search || '%'
          or t.label LIKE '%' || $search || '%'
       group by m.id
       order by hits desc
       limit 50`,
  );
}
