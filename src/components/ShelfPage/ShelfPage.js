import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from '../Item/Item'
import ItemForm from '../ItemForm/ItemForm';

function ShelfPage() {
	const items = useSelector((store) => store.items);
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "FETCH_ITEMS" });
	}, []);

	return (
		<>
			{
				user.id ?

					(<div className="container">
						<h2>Shelf</h2>
						<ItemForm />
						<p>All of the available items can be seen here.</p>
						{items.map((item) => (
							<div key={item.id}>
								<Item item={item} />
							</div>
						))}
					</div>)
					:
					(<h1>GET WRECKED!</h1>)
			}
		</>
	);
}

export default ShelfPage;
