import React, {useState, useEffect} from 'react';

import Title from './Title';

const Images = function() {
	const [files, setFiles] = useState<FileList | null>(null);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => 
		setFiles(e.target.files);

	
	useEffect(() => {
		fetch('/images/upload/hero.jpg?w=30&h=30', {method: 'GET'})
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.error(err.message));
	}, []);

	return (
		<div className="main mx-auto">
			<Title>Images</Title>
			<div className="input-group mb-3">
				<div className="custom-file">
					<input className="custom-file-input" type="file" accept="image/*" multiple onChange={onChange}/>
					<label className="custom-file-label" aria-describedby="Upload image">Upload</label>
				</div>
			</div>
		</div>
	);
};

export default Images;
