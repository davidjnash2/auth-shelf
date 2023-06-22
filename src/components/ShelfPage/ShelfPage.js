import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from '../Item/Item'

function ShelfPage() {
	const items = useSelector((store) => store.items);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "FETCH_ITEMS" });
	}, []);

	return (
		<div className="container">
			<h2>Shelf</h2>
			<p>All of the available items can be seen here.</p>
			{items.map((item) => (
				<div key={item.id}>
					<Item item={item} />
				</div>
			))}
		</div>
	);
}

export default ShelfPage;
