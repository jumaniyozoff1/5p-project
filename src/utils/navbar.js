import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
// import Skill from "../components/Skill";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

export const navbar = [
	{
		id: 1,
		title: "Home",
		path: ".home",
		element: <Home />,
		search: "?",
		hidden: false,
		private: true,
	},
	{
		id: 2,
		title: "About",
		path: ".about",
		element: <About />,
		search: "?",
		hidden: false,
		private: true,
	},
	{
		id: 3,
		title: "Service",
		path: ".service",
		element: <Service />,
		search: "?",
		hidden: false,
		private: true,
	},
	// {
	// 	id: 4,
	// 	title: "Skill",
	// 	element: <Skill />,
	// 	path: ".skill",
	// 	search: "?",
	// 	hidden: false,
	// 	private: true,
	// },
	{
		id: 5,
		title: "Testimonial",
		path: ".testimonial",
		element: <Testimonial />,
		search: "?",
		hidden: false,
		private: true,
	},
	{
		id: 6,
		title: "Team",
		path: ".team",
		element: <Team />,
		search: "?",
		hidden: false,
		private: true,
	},
	{
		id: 7,
		title: "Contact",
		path: ".contact",
		element: <Contact />,
		search: "?",
		hidden: false,
		private: true,
	},
	{
		id: 8,
		title: "Blog",
		path: ".blog",
		element: <Blog />,
		search: "?",
		hidden: false,
		private: true,
	},
];
