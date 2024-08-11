import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import './index.css'
import * as React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const datasetsB = [
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8465a0c89673d266101",
		elementId: "musan1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8275a0c89673d266100",
		elementId: "musap1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8505a0c89673d266102",
		elementId: "musak1",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8465a0c89673d266101",
		elementId: "musan2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8275a0c89673d266100",
		elementId: "musap2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8505a0c89673d266102",
		elementId: "musak2",
	},

	//iryna
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak1",
	},

	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8465a0c89673d266101",
		elementId: "irynan2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8275a0c89673d266100",
		elementId: "irynap2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6280a8505a0c89673d266102",
		elementId: "irynak2",
	},
];


export default function Prediksi(props) {


	const [dataB, setDataB] = React.useState({
		musan1: [],
		musap1: [],
		musak1: [],
		musan2: [],
		musap2: [],
		musak2: [],
		irynan1: [],
		irynap1: [],
		irynak1: [],
		irynan2: [],
		irynap2: [],
		irynak2: [],

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
		<Template userName="Fikri Rida P" title="Prediksi NPK dan Kebutuhan Nutrisi" page={Pages.Prediksi}>
			<div className="container-fluid">

				<div className="row">
					<div className="col-auto">

						


						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											Prediksi NPK
										</h2>
										<div className="text-teal-500">
											Nilai prediksi Sensor NPK
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Waktu Prediksi
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												N Kemarau
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												P Kemarau
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												K Kemarau
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												N Hujan
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												P Hujan
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												K Hujan
											</div>
										</div>
										{dataB.musan1.map((item, index) => (
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{new Date(item.createdAt).toLocaleDateString()}, <br />
														{new Date(item.createdAt).toLocaleTimeString()}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.musan2[index] ? dataB.musan2[index].value : "No data"}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.musap2[index] ? dataB.musap2[index].value : "No data"}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.musak1[index] ? dataB.musak1[index].value : "No data"}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{item.value}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.musap1[index] ? dataB.musap1[index].value : "No data"}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.musak1[index] ? dataB.musak1[index].value : "No data"}
														<br />
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</section>
						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											Prediksi Nutrisi
										</h2>
										<div className="text-teal-500">
											Nilai kebutuhan NPK untuk masa mendatang
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Waktu Prediksi
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												N Kemarau
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												P Kemarau
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												K Kemarau
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												N Hujan
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												P Hujan
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												K Hujan
											</div>
										</div>
										{dataB.irynan1.map((item, index) => (
											<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
												<div key={index} className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{new Date(item.createdAt).toLocaleDateString()}, <br />
														{new Date(item.createdAt).toLocaleTimeString()}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.irynan2[index] ? dataB.irynan2[index].value : "No data"}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.irynap2[index] ? dataB.irynap2[index].value : "No data"}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.irynak1[index] ? dataB.irynak1[index].value : "No data"}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{item.value}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.irynap1[index] ? dataB.irynap1[index].value : "No data"}
														<br />
													</div>
													<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
														{dataB.irynak1[index] ? dataB.irynak1[index].value : "No data"}
														<br />
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</section>

						<section className="grid grid-cols-1 gap-4 mt-12">
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-3 items-center justify-center w-full">
										<span style={{ color: '#FFFFFF' }} className="text-center">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</span>
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
