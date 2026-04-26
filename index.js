// Write your code here!
const shoppingList = [
	{ name: "Chicken Breast", price: 10.5 },
	{ name: "Paprika", price: 3.2 },
	{ name: "Chips", price: 6.5 },
	{ name: "Eggs", price: 4.0 },
	{ name: "Milk", price: 7.8 },
];

function displayCartItems(item) {
	const shoppingCart = document.querySelector("#cart");

	const newItem = document.createElement("li");
	const itemName = document.createElement("p");
	const itemPrice = document.createElement("p");

	itemName.textContent = item.name;
	itemPrice.textContent = "$" + parseFloat(item.price).toFixed(2);

	newItem.append(itemName, itemPrice);
	shoppingCart.append(newItem);
}

shoppingList.forEach((item) => {
	displayCartItems(item);
});

const form = document.querySelector("#new-cart-item-form");

function handleSubmit(event) {
	event.preventDefault();

	const newName = event.target.name.value;
	const newPrice = event.target.price.value;

	const newItem = {
		name: newName,
		price: newPrice,
	};

	shoppingList.push(newItem);
	displayCartItems(newItem);
}

form.addEventListener("submit", (event) => {
	handleSubmit(event);
});
