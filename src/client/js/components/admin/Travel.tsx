import React, {useState, ChangeEvent, FormEvent} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {useAddCategory, useDeleteCategory} from './hooks/';
import {TravelList, TRAVEL_LIST} from './gql';

import Title from './Title';
import Button, {ButtonTypes} from './Button';
import TableSimple from './TableSimple';
import Loader from '../../hocs/Loader';

const Categories = function() {
	const [createValue, setCreateValue] = useState('');
	const {loading, error, data: {categories = []} = {}} = useQuery<TravelList>(TRAVEL_LIST);
	const [addCategory, cLoading] = useAddCategory();
	const [deleteCategory, dLoading] = useDeleteCategory();

	const isLoading = loading || cLoading || dLoading;

	const onCreate = (e: FormEvent) => {
		e.preventDefault();

		if (createValue.trim() !== '') {
			addCategory(createValue);
		};

		setCreateValue('');
	};

	const onDelete = (id: string) => () => {
		if (id) {
			deleteCategory(id);	
		};
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCreateValue(e.target.value);
	};

	const mappedData = categories
		.map(({id, name}) => ({data: [name], onDelete: onDelete(id)}));

	return (
		<div className="main mx-auto">
			<Title>Travel</Title>
			<form onSubmit={onCreate}>
				<div className="input-group mb-5">
					<input 
						type="text" 
						className="form-control" 
						placeholder="Create Name" 
						aria-label="Create Name" 
						value={createValue} 
						onChange={onChange} 
						disabled={loading || cLoading}
					/>
					<div className="input-group-append">
						<Button 
							button={ButtonTypes.Secondary}
							type="submit"
							disabled={isLoading || createValue.trim() === ''}
						>
							Create
						</Button>
					</div>
				</div>
			</form>
			<Loader loading={isLoading}>
				<TableSimple 
					name="Travel" 
					cols={["Name"]} 
					rows={mappedData}
				/>
			</Loader>
		</div>
	);
};

export default Categories;
