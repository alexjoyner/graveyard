class QueryBuilder {
    getInsertString(data, tableName = 'log') {
        let values = "";
        let logs = data.logs;
        Object.keys(logs).map((point_id /* Point ID is the key */, i, arr) => {
            let lastChar = (arr.length - 1 === i) ? ';' : ',';
            values = values + `(${point_id}, '${data.datetime}', ${logs[point_id].value})${lastChar}`;
        })
        return `INSERT INTO "${tableName}" ("point_id", "datetime", "val") VALUES ${values}`
    }
}

if (require.main === module) {
    const test = new QueryBuilder()
    const testData = {
        "datetime": "2018-09-16 03:38:14+00",
        "logs": {
            "1": {
                "name": "Temp Sensor 1",
                "unit": "F",
                "value": 24 
            },
            "2": {
                "name": "Temp Sensor 2",
                "unit": "F",
                "value": 74.5
            }
        }
    }
    console.log(test.getInsertString(testData, 'tmp'));
}
module.exports = QueryBuilder;