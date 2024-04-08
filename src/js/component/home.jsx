import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TaskList from "./tasklist";

//create your first component
const Home = () => {

	return (
		<div class="w-50 flex-wrap m-auto">
        <h1 class="text-light text-center mb-2 border border-light border-top-0 pt-5 pb-3">TO ✧ DO LIST</h1>
		<TaskList />
		</div>
	);
};

export default Home;
