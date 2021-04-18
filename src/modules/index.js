const Login = require('./Login')
const Register = require('./Register')
const Category = require('./Category')
const Scalars = require('./Scalars')
const Subcategory = require('./Subcategory')
const Newproducts = require('./Newproducts')
const Giftproducts = require('./Giftproducts')
const RecommendedProducts = require('./Recommendedproducts')
const BestProducts = require('./BestProducts')
const Subclass = require('./Subclass')
const Cart = require('./Cart')
const Forwards = require('./Forwards')
const States = require('./States')
const Regions = require('./Regions')
const Comment = require('./Comment')
const Navbar = require('./Navbar')
const Products = require('./Products')
const Filter = require('./Filter')
const Filters = require('./Filters')

const users = [
	{
		id: 1,
		name: 'A',
		age: 99
	},
	{
		id: 1,
		name: 'A',
		age: 99
	},
	{
		id: 1,
		name: 'A',
		age: 11
	},
	{
		id: 1,
		name: 'A',
		age: 67
	},
	{
		id: 1,
		name: 'A',
		age: 67
	}
]

// const filter = users.filter((e, i, a) => console.log(a.indexOf(e)))

// var result = users.reduce((unique, o) => {
//     if(!unique.some(obj => obj.age === o.age)) {
//       unique.push(o);
//     }
//     return unique;
// },[]);

// console.log(result)


module.exports = [
	Login,
	Register,
	Category,
	Subcategory,
	Scalars,
	Newproducts,
	Giftproducts,
	RecommendedProducts,
	BestProducts,
	Subclass,
	Cart,
	Forwards,
	States,
	Regions,
	Comment,
	Navbar,
	Products,
	Filter,
	Filters
]