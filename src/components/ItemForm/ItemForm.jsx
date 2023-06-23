import { useDispatch, useSelector } from "react-redux";
import React, {useState} from 'react';

function ItemForm() {
	const dispatch = useDispatch();
	const [image_url, setImage_Url] = useState("");
	const [description, setDescription] = useState("");
	const addItem = (e) => {
		// e.preventDefault();
		const item = {
			image_url,
			description
		}
		console.log(image_url, description);
		console.log(item);
		dispatch({ type: "POST_ITEM", payload: item });
	};
	return (
		<>
			<form
				onSubmit={addItem}
			>
				<label htmlFor="url">
					<p>Enter your URL here: </p>
					<input
						name="url"
						type="text"
						value={image_url}
						onChange={(e) => {
							setImage_Url(e.target.value);
						}}
					/>
				</label>

				<label htmlFor="description">
					<p>Describe your item: </p>
					<input
						name="description"
						type="text"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</label>
				<input type="submit" value={"SUBMIT"} />
			</form>
		</>
	);
}

export default ItemForm;
