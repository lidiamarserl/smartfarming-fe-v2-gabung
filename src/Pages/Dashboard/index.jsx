import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import './index.css'
import * as React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";


export default function Dashboard() {


	return (
		<Template userName="Fikri Rida P" title="Dashboard" page={Pages.Dashboard}>
			<div className="container-fluid">

				{/* <div className="row">
					<div className="col-auto"> */}
						<div class="mt-6 container mx-auto grid grid-cols-2 md:grid-cols-6 gap-5 overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] justify-between items-center">
							<div class="bg-white p-5 rounded-md">
								<div>
									<p class="text-black">Nama Sensor</p>
									<p class="text-2xl font-semibold tracking-tight text-teal-500">Normal</p>
									<p class="text-black">Nilai</p>
								</div>

							</div>
							<div class="bg-white p-5 rounded-md">

							</div>
							<div class="bg-white p-5 rounded-md">

							</div>
							<div class="bg-white p-5 rounded-md">

							</div>
							<div class="bg-white p-5 rounded-md">

							</div>
							<div class="bg-white p-5 rounded-md">

							</div>
						</div>

					{/* </div>
				</div> */}
			</div>
		</Template>
	);
}
