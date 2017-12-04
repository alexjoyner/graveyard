import React from 'react';
import 'purecss';

export class HistoryTable extends React.Component {

    constructor(props) {
        super(props);
        this.getNoDataRow = () => {
            return;
        }
    }

    render() {
        return (
            <div>
                <table className={"pure-table"}>
                    <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2}>Sorry, Nothing to display</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}