import React from 'react';
import Button, {ButtonTypes} from './Button';

export interface RowProps {
	data: string[];
	onDelete: () => void;
}

interface Props {
	name: string;
	cols: string[];
	rows: RowProps[];
}

const Row = function({data, onDelete}: RowProps, index: number) {
	return (
		<tr key={"row-" + index}>
			<td scope="row">{index + 1}</td>
			{
				data.map(text => <td key={text}>{text}</td>)
			}
			<td>
				<Button button={ButtonTypes.Small} onClick={onDelete}>Remove</Button>
			</td>
		</tr>
	);
}

const TableSimple = function({name, cols, rows}: Props) {
	return rows.length > 0 ? (
		<table className="table table-hover table-borderless border">
			<thead className="thead-light">
				<tr>
					<th scope="col">#</th>
					{
						cols
							.map(text => <th key={"col-" + text} scope="col">{text}</th>)
					}
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{
					rows.map(Row)
				}
			</tbody>
		</table>
	) : (
		<div className="alert alert-warning text-center font-weight-bold" role="alert">
			There is no data for {name}
		</div>
	);
};

export default TableSimple;
