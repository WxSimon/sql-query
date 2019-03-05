export function build (
	Dialect: FxSqlQueryDialect.Dialect,
	set: FxSqlQuerySql.DataToSet,
	opts: FxSqlQuery.ChainBuilderOptions
): string | string[] {
	opts = opts || {};

	if (!set || set.length === 0) {
		return [];
	}

	var query = [];

	for (let k in set) {
		query.push(
			Dialect.escapeId(k) +
			" = " +
			Dialect.escapeVal(set[k], opts.timezone)
		);
	}

	return "SET " + query.join(", ");
};
