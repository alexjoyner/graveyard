class QueryBuilder {
  getInsertString(req) {
    console.log(req.body);
    const data = req.body;
    const tableName = data.tableName || 'log';
    let values = '';
    const logs = data.logs;
    Object.keys(logs).map((pointID /* Point ID is the key */, i, arr) => {
      const lastChar = (arr.length - 1 === i) ? ';' : ',';
      values += `(${pointID}, '${data.datetime}', ${logs[pointID].value})${lastChar}`;
      return null;
    });
    return {
      text: `INSERT INTO "${tableName}" ("point_id", "datetime", "val") VALUES ${values}`,
    };
  }
}

if (require.main === module) {
  const test = new QueryBuilder();
  const testData = {
    datetime: '2018-09-16 03:38:14+00',
    logs: {
      1: {
        name: 'Temp Sensor 1',
        unit: 'F',
        value: 24,
      },
      2: {
        name: 'Temp Sensor 2',
        unit: 'F',
        value: 74.5,
      },
    },
  };
  console.log(test.getInsertString(testData, 'tmp'));
}
module.exports = QueryBuilder;
