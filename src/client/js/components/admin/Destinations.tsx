import React, {useState, ChangeEvent, FormEvent} from 'react';
import {useQuery} from '@apollo/client';

import {ContinentList, CONTINENT_LIST, DestinationList, DESTINATION_LIST, DestinationInput} from './gql/';
import {useAddDestination, useDeleteDestination} from './hooks/';
import Title from './Title';
import Button, {ButtonTypes} from './Button';
import TableSimple from './TableSimple';
import ErrorList from './ErrorList';
import Loader from '../../hocs/Loader';

const validateForm = (form: {[key: string]: string;}) => Object
	.values(form)
	.every(prop => prop !== '');
const initForm = {
	country: '',
	continent: ''
};

const Destinations = function() {
	const [form, setForm] = useState<DestinationInput>(initForm);

	const {data: {continents = []} = {}} = useQuery<ContinentList>(CONTINENT_LIST);
	const {data: {destinations = []} = {}, loading} = useQuery<DestinationList>(DESTINATION_LIST);
	const [addDestination, cLoading, error] = useAddDestination();
	const [deleteDestination, dLoading] = useDeleteDestination();

	const isLoading = loading || cLoading || dLoading;

	const onChange = (prop: keyof DestinationInput) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setForm({...form, [prop]: e.target.value});
	};

	const onCreate = (e: FormEvent) => {
		e.preventDefault();

		if (validateForm(form) && form.continent !== '0') {
			addDestination(form);
			setForm(initForm);
		}
	};

	const onDelete = (id: string) => () => {
		deleteDestination(id);
	};

	const mappedData = destinations
		.map(({id, country, continent}) => ({
			data: [country, continent], 
			onDelete: onDelete(id)
		}));

	return (
		<div className="main mx-auto">
			<Title>Destinations</Title>
			<form className="form-inline mb-5" onSubmit={onCreate}>
				<label className="sr-only" htmlFor="country">Country</label>
				<input 
					onChange={onChange('country')} 
					type="text" 
					className="form-control mb-2 mr-sm-2" 
					id="name" placeholder="Country" 
					value={form.country}
				/>
				<select 
					className="custom-select mb-2 mr-sm-2" 
					onChange={onChange('continent')} 
					value={form.continent}
				>
					<option value="0">Choose Continent</option>
					{
						continents.map(c => (
							<option key={c} value={c}>{c}</option>
						))
					}
				</select>
				<Button
					button={ButtonTypes.Secondary}
					className="mb-2"
					type="submit"
					disabled={!validateForm(form)}
				>
					Create
				</Button>
			</form>
			{error && <ErrorList errors={[error]}/>}
			<Loader loading={isLoading}>
				<TableSimple 
					name="Destinations" 
					cols={["Country", "Continent"]} 
					rows={mappedData}
				/>
			</Loader>
		</div>
	);
};

export default Destinations;
