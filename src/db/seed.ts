import { reset, seed } from "drizzle-seed";
import { schema } from "./schema/index.ts";
import { sql, db } from "./connection.ts";

await reset(db, schema);

await seed(db, schema).refine((f) => {
	return {
		rooms: {
			count: 20,
			columns: {
				name: f.companyName(),
				description: f.loremIpsum(),
			},
			with: {
				questions: 1,
			}
		},

	};
});

await sql.end();

console.log("Database seeded");
