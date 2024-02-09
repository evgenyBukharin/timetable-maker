import moment from "moment";

const url = new URL(window.location.href);

const doctorsList = [
	{
		name: "Скворцова",
		doctorId: 1,
	},
	{
		name: "Акула",
		doctorId: 2,
	},
	{
		name: "Маслов",
		doctorId: 3,
	},
	{
		name: "Жираф",
		doctorId: 4,
	},
	{
		name: "Джулиан",
		doctorId: 5,
	},
	{
		name: "Глория",
		doctorId: 6,
	},
	{
		name: "Шнейдерман",
		doctorId: 7,
	},
];
const timetableData = [
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "10-15",
			},
			{
				name: "Акула",
				time: "10:30-15",
			},
			{
				name: "Маслов",
				time: "9-15",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "9-15",
			},
			{
				name: "Глория",
				time: "9-15",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Шнейдерман",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
	{
		firstHalf: [
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Акула",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "",
				time: "",
			},
		],
		secondHalf: [
			{
				name: "",
				time: "",
			},
			{
				name: "Маслов",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "",
				time: "",
			},
			{
				name: "Скворцова",
				time: "",
			},
			{
				name: "Глория",
				time: "",
			},
			{
				name: "Джулиан",
				time: "",
			},
		],
	},
];

const doctorsBook = {};
doctorsList.forEach((obj) => {
	doctorsBook[obj.name] = obj.doctorId;
});

// количество рядов в каждом дне (слоты под сотрудника)
const cellRowsCount = 7;
// количество колонок в каждом дне (слоты под инпуты сотрудников)
const cellColumnCount = 2;
const cellsCount = 35;
const ruDateFormat = "DD.MM.YYYY";
const months = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь",
];
const formattedMonths = [
	"Января",
	"Февраля",
	"Марта",
	"Апреля",
	"Майя",
	"Июня",
	"Июля",
	"Августа",
	"Сентября",
	"Октября",
	"Ноября",
	"Декабря",
];
const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const monthEl = document.querySelector(".maker__month");
if (url.searchParams.get("month") == null) {
	url.searchParams.set("month", months[moment().month()]);
	history.pushState(null, null, url);
}

if (!months.includes(url.searchParams.get("month"))) {
	url.searchParams.set("month", months[moment().month()]);
	history.pushState(null, null, url);
}

if (url.searchParams.get("year") == null) {
	url.searchParams.set("year", moment().year());
	history.pushState(null, null, url);
}

const currentMoment = moment().set({
	date: 1,
	month: months.findIndex((el) => {
		return el == url.searchParams.get("month");
	}),
});

const daysInMonth = currentMoment.daysInMonth();
const currentWeekDayId = currentMoment.day();
const currentWeekDay = weekDays[currentWeekDayId];

monthEl.innerHTML = `${url.searchParams.get("month")} ${url.searchParams.get("year")}`;

const cellsContainer = document.querySelector(".maker__days");

function getEmptyCellsCount() {
	if (currentMoment.startOf("month").day() == 0) {
		return 6;
	}
	return currentMoment.startOf("month").day() - 1;
}

function drawEmptyCells(count) {
	for (let i = 0; i < count; i++) {
		let emptyCell = document.createElement("div");
		emptyCell.classList = "maker__cell maker__cell-empty";
		emptyCell.innerHTML = `
			<div class="maker__number"></div>
		`;
		cellsContainer.appendChild(emptyCell);
	}
}
function drawInputsColumns(columnsCount, parent, dayData) {
	for (let k = 0; k < columnsCount; k++) {
		let dayDataKeys = [];
		if (dayData) {
			dayDataKeys = Object.keys(dayData);
		}
		let cellColumn = document.createElement("div");
		cellColumn.classList = "maker__column";
		for (let j = 0; j < cellRowsCount; j++) {
			// создаем селект
			let newSelectContainer = document.createElement("div");
			newSelectContainer.classList = "maker__container-select";

			let newSelect = document.createElement("select");
			newSelect.classList = "maker__select";

			let foreachArray = [];
			foreachArray = doctorsList.slice(0);
			if (dayData) {
				if (dayData[dayDataKeys[k]][j] == "") {
					foreachArray.unshift({ name: "", doctorId: null });
				} else {
					foreachArray.unshift({ name: dayData[dayDataKeys[k]][j].name, doctorId: null });
					foreachArray = foreachArray.filter(
						(value, index, self) => index == self.findIndex((t) => t.name == value.name)
					);
				}
			} else {
				let dayDataTemplate = {
					firstHalf: [
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
					],
					secondHalf: [
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
						{
							name: "",
							time: "",
						},
					],
				};
				foreachArray.unshift({ name: "", doctorId: null });
			}
			foreachArray.push({ name: "", doctorId: null });
			foreachArray.forEach((doctor) => {
				let newOption = document.createElement("option");
				newOption.innerHTML = doctor.name;
				newSelect.appendChild(newOption);
			});

			newSelectContainer.appendChild(newSelect);
			cellColumn.appendChild(newSelectContainer);

			// создаем инпут для времени
			let newInput = document.createElement("input");
			newInput.setAttribute("type", "text");
			newInput.classList = "maker__input";
			if (dayData) {
				newInput.setAttribute("value", dayData[dayDataKeys[k]][j].time);
			}
			newInput.addEventListener("keydown", (e) => {
				validateTimeInput(e);
			});
			newInput.addEventListener("change", (e) => {
				validateTimeInputValue(e);
			});
			newSelectContainer.appendChild(newInput);
		}
		parent.appendChild(cellColumn);
	}
}

function initTable(timetableData) {
	let emptyCellsCount = getEmptyCellsCount();
	drawEmptyCells(emptyCellsCount);
	for (let i = 0; i < daysInMonth; i++) {
		let newCell = document.createElement("div");
		newCell.classList = "maker__cell maker__cell-default";
		newCell.innerHTML = `
			<div class="maker__number">${i + 1} ${formattedMonths[currentMoment.month()]}</div>
		`;
		// проверка, воскресенье ли этот столбец
		if ((emptyCellsCount + i + 1) % 7 !== 0) {
			drawInputsColumns(cellColumnCount, newCell, timetableData[i]);
		} else {
			drawInputsColumns(1, newCell, timetableData[i]);
			newCell.classList.add("maker__cell-sunday");
		}
		cellsContainer.appendChild(newCell);
	}
	drawEmptyCells(cellsCount - getEmptyCellsCount() - daysInMonth);
}

let allowedCharacters = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"-",
	":",
	"Backspace",
	"Delete",
	"ArrowLeft",
	"ArrowRight",
];

function validateTimeInput(e) {
	if (!allowedCharacters.includes(e.key)) {
		e.preventDefault();
	}
	if (e.key == "-" && e.target.value.includes("-")) {
		e.preventDefault();
	}
}

function validateTimeInputValue(e) {
	// let input = e.target;
	// let value = input.value;
	// let arrayValue = value.split("-");
	// if (arrayValue[0].length > 4) {
	// 	input.classList.add("maker__input-invalid");
	// } else {
	// 	input.classList.remove("maker__input-invalid");
	// }
}

initTable(timetableData);

const saveButton = document.querySelector(".maker__button-save");
saveButton.addEventListener("click", () => {
	let defaultCells = document.querySelectorAll(".maker__cell-default");
	let cellsColelctedData = [];
	defaultCells.forEach((cell) => {
		let cellData = [];
		let columns = cell.querySelectorAll(".maker__column");
		columns.forEach((column, columnIdx) => {
			let dataContainers = column.querySelectorAll(".maker__container-select");
			let columnData = [];
			dataContainers.forEach((container) => {
				let containerData = {
					doctorId: doctorsBook[container.querySelector(".maker__select").value],
					time: getDoctorTime(
						container.querySelector(".maker__input").value,
						container.querySelector(".maker__select").value,
						columnIdx,
						columns.length
					),
				};
				columnData.push(containerData);
			});
			cellData.push(columnData);
		});
		cellsColelctedData.push(cellData);
	});
	console.log(cellsColelctedData);
});

function getDoctorTime(inputValue, doctorId, columnId, columnsCount) {
	if (inputValue !== "") {
		return inputValue;
	}
	if (doctorsBook[doctorId] !== undefined) {
		// воскресенье
		if (columnsCount == 1) {
			return "9-19";
		}
		switch (columnId) {
			// первая колонна -> стандартный период 9-15
			case 0:
				return "9-15";
			// вторая колонна -> стандартный период 15-21
			case 1:
				return "15-21";
		}
	}
}

function updateGetParam(name, value) {
	url.searchParams.set(name, value);
	history.pushState(null, null, url);
	window.location.reload();
}

const prevMonthBtn = document.querySelector(".maker__button-month-prev");
prevMonthBtn.addEventListener("click", () => {
	if (months[currentMoment.month() - 1]) {
		updateGetParam("month", months[currentMoment.month() - 1]);
	} else {
		updateGetParam("month", months[months.length - 1]);
		updateGetParam("year", +url.searchParams.get("year") - 1);
	}
});

const nextMonthBtn = document.querySelector(".maker__button-month-next");
nextMonthBtn.addEventListener("click", () => {
	if (months[currentMoment.month() + 1]) {
		updateGetParam("month", months[currentMoment.month() + 1]);
	} else {
		updateGetParam("month", months[0]);
		updateGetParam("year", +url.searchParams.get("year") + 1);
	}
});
