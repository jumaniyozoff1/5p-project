import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import Contact from "../components/Contact";

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
	{
		id: 4,
		title: "Testimonial",
		path: ".testimonial",
		element: <Testimonial />,
		search: "?",
		hidden: false,
		private: true,
	},
	{
		id: 5,
		title: "Team",
		path: ".team",
		element: <Team />,
		search: "?",
		hidden: false,
		private: true,
	},
	{
		id: 6,
		title: "Contact",
		path: ".contact",
		element: <Contact />,
		search: "?",
		hidden: false,
		private: true,
	},
];
