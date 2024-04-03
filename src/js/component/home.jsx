import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TaskList from "./tasklist";

//create your first component
const Home = () => {

	return (
		<div class="w-50 flex-wrap m-auto mt-5">
        <h1 class="text-light">TODO LIST</h1>
		<TaskList />
		</div>
	);
};

export default Home;
