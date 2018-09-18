class QueryBuilder {
    getInsertString(data, tableName = 'log'){
        let values = "";
        let logs = data.logs;
        for(let i = 0; i < logs.length; i++){
            let lastChar = (i == logs.length - 1)?';':',';
            values = values + `(${logs[i].point_id}, '${data.datetime}', ${logs[i].value})${lastChar}`
        }
        return `INSERT INTO "${tableName}" ("point_id", "datetime", "val") VALUES ${values}`
    }
}

if(require.main === module){
    const test = new QueryBuilder()
    const testData = {
        datetime: '2018-09-16 03:38:14+00',
        logs: [{
            value: 25.4,
            point_id: 2
        },{
            value: 75,
            point_id: 1
        }]
    }
    console.log(test.getInsertString(testData, 'tmp'));
}
module.exports = QueryBuilder;