import React, {useState} from 'react';

import {PostInput} from './gql';
import Title from './Title';
import Button, {ButtonTypes} from './Button';
import Input from './Input';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface Props {
	title: string;
}

const initForm: PostInput = {
	title: ""
};

const Post = function({title}: Props) {
	const [form, setForm] = useState<PostInput>(initForm);

	const onChange = (key: keyof PostInput) => (e: ChangeEvent) => {
		setForm({...form, [key]: e.target.value});
	};

	return (
		<div className="main mx-auto">
			<div className="d-flex align-items-center justify-content-around">
				<Title>{title}</Title>
				<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
					<div className="btn-group mr-2" role="group" aria-label="Group buttons">
						<Button button={ButtonTypes.Secondary}>Cancel</Button>
						<Button>Save</Button>
					</div>
				</div>
			</div>
			<form>
				<Input onChange={onChange('title')} value={form.title}>
					Title
				</Input>
				<Input readonly={true}>Date</Input>
				<Input 
					selected={form.status} 
					options={["DRAFT", "PUBLISHED"]} 
					onChange={onChange('status')}
				>
					Status
				</Input>
				<Input onChange={onChange('seo_title')} value={form.seo_title}>
					Seo Title
				</Input>
				<Input onChange={onChange('meta_description')} value={form.meta_description}>
					Meta Description
				</Input>
			</form>
		</div>
	);
};

export default Post;
