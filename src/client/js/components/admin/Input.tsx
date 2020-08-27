import React from 'react';
import {ChangeEvent} from './Post';

interface Props {
	type?: "text" | "email" | "password";
	readonly?: boolean;
	value?: string | number;
	options?: (string | number)[];
	selected?: string | number;
	onChange?: (e: ChangeEvent) => void;
}

const Input: React.FC<Props> = function({type = "text", readonly = false, value = "", options, selected, onChange, children}) {
	let css = "form-control";

	if (readonly) {
		css += " border-0 bg-transparent";
	}

	return (
		<div className="form-group row">
			<label className="col-sm-2 col-form-label font-weight-bold">{children}</label>
			<div className="col-sm-10">
				{
					options ? (
						<select className="custom-select" onChange={onChange} value={selected}>
							{
								options
								.map(val => (
									<option key={val} value={val}>
										{val}
									</option>)
								)
							}
						</select>
					) : (
						<input type={type} className={css} value={value} disabled={readonly} onChange={onChange}/>
					)
				}
			</div>
		</div>
	);
};

export default Input;
