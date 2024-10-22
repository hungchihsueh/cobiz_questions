/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
‘engineer’ or ‘systemAnalytics’.
**/
/**



Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)
to sort this array and print it out.
**/
const users = [
	{
		firstName: "John",
		lastName: "nickson",
		customerID: "1234567890",
		note: "",
		profession: "engineer",
	},
	{
		firstName: "Mary",
		lastName: "Smith",
		customerID: "9876543210",
		note: "good worker",
		profession: "productOwner",
	},
	{
		firstName: "Jane",
		lastName: "adams",
		customerID: "5555555555",
		note: "",
		profession: "student",
	},
	{
		firstName: "Bob",
		lastName: "Doe",
		customerID: "3333333333",
		note: "new employee",
		profession: "engineer",
	},
	{
		firstName: "Alice",
		lastName: "nickson",
		customerID: "2222222222",
		note: "",
		profession: "freelancer",
	},
	{
		firstName: "Mike",
		lastName: "Brown",
		customerID: "4444444444",
		note: "experienced worker",
		profession: "systemAnalytics",
	},
	{
		firstName: "Emma",
		lastName: "Davis",
		customerID: "6666666666",
		note: "",
		profession: "productOwner",
	},
	{
		firstName: "Tom",
		lastName: "Davis",
		customerID: "8888888888",
		note: "good team player",
		profession: "engineer",
	},
	{
		firstName: "Lily",
		lastName: "Sam",
		customerID: "9999999999",
		note: "",
		profession: "student",
	},
	{
		firstName: "Sam",
		lastName: "Johnson",
		customerID: "1111111111",
		note: "experienced worker",
		profession: "freelancer",
	},
];
function sortUserName(user) {
	console.log(
		user
			.sort((a, b) => a.firstName.localeCompare(b.firstName))
			.map((user) => `${user.firstName} ${user.lastName} ${user.customerID}`),
	);
}
sortUserName(users);

function sortByType(user) {
	return user.sort((a, b) => {
		function getProfessionOrder(profession) {
			const order = [
				"systemAnalytics",
				"engineer",
				"productOwner",
				"freelancer",
				"student",
			];
			return order.indexOf(profession);
		}
		return getProfessionOrder(a.profession) - getProfessionOrder(b.profession);
	});
}

console.log(sortByType(users));

/**
 Q3.Please write down a function to console log unique value from this array.
 **/
let items = [
	1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
	4, 7, 8, 8, 0, 1, 2, 3, 1,
];
function getUniqueNumber(items) {
	console.log([...new Set(items)]);
}

getUniqueNumber(items);

/** Q4. Can you explain about Interface and Enum, and where will you be using,
please make some examples. **/

// An interface is a way to define the shape of an object. It specifies the properties, methods, and their types that an object must have. Interfaces are used to define a contract that must be followed by any class or object that implements it. My use cases usually be like react components' props and api responses.
// interface Props{
//     id: number;
//     name: string;
//     age?: number;
// }

// An enum is a way to define a set of named values. Enums are useful when you have a small, fixed set of values that can be used as properties or return types.
//  My use cases usually be like select options in a form.
// enum Gender {
//     male = 1,
//     female = 2,
//     dontWannaSay = 3,
// }

/** Q5. Can you explain the problem with the following code, and how to fix
class Count extends React.Component {
constructor(props) {
super(props);
this.state = { count: 0 };
this.handleAddCount = this.handleAddCount.bind(this);
}
handleAddCount(){
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
}
render() {
return (
<div>
<h2>{this.state.count}</h2>
<button onClick={this.handleAddCount}>Add</button>
</div>
);
}
}
ReactDOM.render(
<Count />,
document.getElementById('root')
); **/

/**
 * answer:
 * problem: calling multiple setState  in a row without waiting for the previous one to complete will lead to unexpected behavior.
 *  fix: this.setState(prevState=>{ count: prevState.count + 1 });
 *
 **/

// Q6.
/** Please write the sample code to debounce handleOnChange **/
// var SearchBox = React.createClass({
// render: function() {
// return <input type="search" name="p" onChange={this.handleOnChange}
// />;
// },
// handleOnChange: function(event) {
// let timer = null;
// if (timer !== null) return;
// timer = setTimeout(() => {
// 	fetch("fetch data")
// 		.then((res) => res.json())
// 		.catch((err) => console.error(err));
//  clearTimer(timer)
// }, 1000);

// // make ajax call
// }
// });
