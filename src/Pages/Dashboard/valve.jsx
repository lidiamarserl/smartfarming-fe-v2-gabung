import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import './index.css'
import * as React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const datasetsB = [
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "65792115cc701ed1363c640f",
		elementId: "khaliwaktu",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "65792115cc701ed1363c640f",
		elementId: "khalipersen",
	},
];


export default function Valve(props) {
	

	const [dataB, setDataB] = React.useState({
		khaliwaktu: [],
		khalipersen: [],

	});

	React.useEffect(() => {
		
		datasetsB.forEach((datasetB) => {
			console.log("datasetB", datasetB);
			axios
				.get("https://api.sf2.ctailab.com/datalist", {
					params: {
						device_id: datasetB.device_id,
						index_id: datasetB.index_id,
					},
				})
				.then((res) => {
					setDataB((prevState) => ({
						...prevState,
						[datasetB.elementId]: res.data || [],
					}));

				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});
	}, []);

	return (
		<Template userName="Fikri Rida P" title="Log Control Valve" page={Pages.Valve}>
			<div className="container-fluid">

				<div className="row">
					<div className="col-auto">

						
						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											Log Control Valve 1
										</h2>
										<div className="text-teal-500">
											Status pemberian irigasi bedeng hujan
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Waktu
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Durasi (detik)
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Bukaan (0-225)
											</div>
										</div>
										{dataB.khalipersen
											.filter(item => item.value !== 0)
											.map((item, index) => (
												<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
													<div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{new Date(item.createdAt).toLocaleDateString()}, <br />
															{new Date(item.createdAt).toLocaleTimeString()}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{dataB.khaliwaktu[index] ? dataB.khaliwaktu[index].value : "No data"}
															{/* 															{item.value} */}
															<br />
														</div>
														<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
															{/* 															{dataB.khalipersen[index] ? dataB.khalipersen[index].value : "No data"} */}
															{(item.value / 225 * 100).toFixed(2)}%
															<br />
														</div>
													</div>
												</div>
											))}
									</div>
								</div>
							</div>
						</section>


					</div>
				</div>
			</div>
		</Template>
	);
}
