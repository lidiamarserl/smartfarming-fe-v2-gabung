import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import './index.css'
import * as React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const datasoil = [

	//SM
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "kemaraur1",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "hujanr1",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "611f7d7f4750382956b468e4",
		elementId: "manualr1",
	},

	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "61305378590b802f53935e9a",
		elementId: "kemaraur2",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "61305378590b802f53935e9a",
		elementId: "hujanr2",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "61305378590b802f53935e9a",
		elementId: "manualr2",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "6130523e590b802f53935e99",
		elementId: "kemaraur3",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "6130523e590b802f53935e99",
		elementId: "hujanr3",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "6130523e590b802f53935e99",
		elementId: "manualr3",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "618f89476941b53a5d35606f",
		elementId: "kemaraur4",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "618f89476941b53a5d35606f",
		elementId: "hujanr4",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "618f89476941b53a5d35606f",
		elementId: "manualr4",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "kemaraur5",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "hujanr5",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "61910bcfd2cd6b06225ee0ca",
		elementId: "manualr5",
	},
	{
		device_id: "Tdr4a4bKp5AzrCe6KGki8bUDF0ynE9l9",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "kemaraur6",
	},
	{
		device_id: "XniD6mBlnKqagRJ8qD9WhR6JGK4yle1d",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "hujanr6",
	},
	{
		device_id: "ODw83libBAixNsPMGTmqQer2gn2mZrOC",
		index_id: "618dc5c2553f46dc235bcfed",
		elementId: "manualr6",
	},

	//sensor lainnya
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8275a0c89673d266100",
		elementId: "sensorn1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8275a0c89673d266100",
		elementId: "sensorn2",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8465a0c89673d266101",
		elementId: "sensorp1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8465a0c89673d266101",
		elementId: "sensorp2",
	},
	{
		device_id: "GDdR9vUe3yXQWcfhP6grCLK74ZV4QZFL",
		index_id: "6280a8505a0c89673d266102",
		elementId: "sensork1",
	},
	{
		device_id: "gxaZkwZafNVweTq8HycMKpZMz9MvbTyh",
		index_id: "6280a8505a0c89673d266102",
		elementId: "sensork2",
	},
	{
		device_id: "D8fRCvhyRWUNtzfWuhbdb9q5azNkrE4g",
		index_id: "618bce88109f491b98e68b59",
		elementId: "sensorph1",
		sensor_name: "PH1"
	},
	{
		device_id: "lWwWZ7RHI5HToRocg122mLHgmqKsT7F7",
		index_id: "618bce88109f491b98e68b59",
		elementId: "sensorph2",
		sensor_name: "PH2"
	},
	{
		device_id: "BngyuCFVukyQakpJyBug4WubAdpnt2g5",
		index_id: "6142a70446514f50ff8ed6a8",
		elementId: "sensorst1",
		sensor_name: "ST1"
	},
	{
		device_id: "J3c6xgg64gyL8pJ5uCZw69Ec4FJBj97R",
		index_id: "6142a70446514f50ff8ed6a8",
		elementId: "sensorst2",
		sensor_name: "ST1"
	},
	{
		device_id: "AMJ6RHSdwf4XMv2dhPRh8hxnE92exg7U",
		index_id: "638d8677245a8f9cc00b4bcc",
		elementId: "sensordht",
		sensor_name: "DHT"
	},
	{
		device_id: "fPMkkgECQndBCs7eFtha09uy57Qv8Xks",
		index_id: "6129bfebdb963d1d1eaac307",
		elementId: "sensortds1",
		sensor_name: "tds1"
	},
	{
		device_id: "wqZeXsBhFSL6CLzfaUjJsnavudV3WvL7",
		index_id: "6129bfebdb963d1d1eaac307",
		elementId: "sensortds2",
		sensor_name: "tds2"
	},
];


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


//ini buat nampilin anomali di setiap tabel
const datasoilA = [
	{
		sensor_name: "SM_C3R1",
		elementId: "SM_C3R1_1",
	},
	{
		sensor_name: "SM_C2R1",
		elementId: "SM_C2R1_1",
	},
	{
		sensor_name: "SM_C1R2",
		elementId: "SM_C1R1_1",
	},
	{
		sensor_name: "SM_C3R2",
		elementId: "SM_C3R2_1",
	},
	{
		sensor_name: "SM_C2R2",
		elementId: "SM_C2R2_1",
	},
	{
		sensor_name: "SM_C1R2",
		elementId: "SM_C1R2_1",
	},
	{
		sensor_name: "SM_C3R3",
		elementId: "SM_C3R3_1",
	},
	{
		sensor_name: "SM_C2R3",
		elementId: "SM_C2R3_1",
	},
	{
		sensor_name: "SM_C1R3",
		elementId: "SM_C1R3_1",
	},
	{
		sensor_name: "SM_C3R4",
		elementId: "SM_C3R4_1",
	},
	{
		sensor_name: "SM_C2R4",
		elementId: "SM_C2R4_1",
	},
	{
		sensor_name: "SM_C1R4",
		elementId: "SM_C1R4_1",
	},
	{
		sensor_name: "SM_C3R5",
		elementId: "SM_C3R5_1",
	},
	{
		sensor_name: "SM_C2R5",
		elementId: "SM_C2R5_1",
	},
	{
		sensor_name: "SM_C1R5",
		elementId: "SM_C1R5_1",
	},
	{
		sensor_name: "SM_C3R6",
		elementId: "SM_C3R6_1",
	},
	{
		sensor_name: "SM_C2R6",
		elementId: "SM_C2R6_1",
	},
	{
		sensor_name: "SM_C1R6",
		elementId: "SM_C1R6_1",
	},

	//sensor lainnya
	{
		sensor_name: "NPK1",
		elementId: "NPK1_1",
	},
	{
		sensor_name: "NPK2",
		elementId: "NPK2_1",
	},
	{
		sensor_name: "PH1",
		elementId: "PH1A_1",
	},
	{
		sensor_name: "PH2",
		elementId: "PH2A_1",
	},
	{
		sensor_name: "ST1",
		elementId: "ST1A_1",
	},
	{
		sensor_name: "ST2",
		elementId: "ST2A_1",
	},
	{
		sensor_name: "DHT",
		elementId: "DHTA_1",
	},
];



export default function Dashboard() {

	const [soil, setSoil] = React.useState({
		kemaraur1: null,
		hujanr1: null,
		manualr1: null,
		kemaraur2: null,
		hujanr2: null,
		manualr2: null,
		kemaraur3: null,
		hujanr3: null,
		manualr3: null,
		kemaraur4: null,
		hujanr4: null,
		manualr4: null,
		kemaraur5: null,
		hujanr5: null,
		manualr5: null,
		kemaraur6: null,
		hujanr6: null,
		manualr6: null,

		//sensor lain
		sensorn1: null,
		sensorn2: null,
		sensorp1: null,
		sensorp2: null,
		sensork1: null,
		sensork2: null,
		sensorph1: null,
		sensorph2: null,
		sensorst1: null,
		sensorst2: null,
		sensordht: null,
		sensortds1: null,
		sensortds2: null,

	});

	

	const [dataB, setDataB] = React.useState({
		khaliwaktu: [],
		khalipersen: [],
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


	//ini nanti buat anomaly tiap tabel
	const [soilA, setSoilA] = React.useState({
		SM_C3R1_1: null,
		SM_C2R1_1: null,
		SM_C1R1_1: null,
		SM_C3R2_1: null,
		SM_C2R2_1: null,
		SM_C1R2_1: null,
		SM_C3R3_1: null,
		SM_C2R3_1: null,
		SM_C1R3_1: null,
		SM_C3R4_1: null,
		SM_C2R4_1: null,
		SM_C1R4_1: null,
		SM_C3R5_1: null,
		SM_C2R5_1: null,
		SM_C1R5_1: null,
		SM_C3R6_1: null,
		SM_C2R6_1: null,
		SM_C1R6_1: null,
		//sensor lain
		NPK1_1: null,
		NPK2_1: null,
		PH1A_1: null,
		PH2A_1: null,
		ST1A_1: null,
		ST2A_1: null,
		DHTA_1: null,
	});

	const [analysis, setAnalysis] = React.useState("Pemberian air dan nutrisi pada bedeng hujan hari ini sudah sesuai");
	const [analysisA, setAnalysisA] = React.useState("Pemberian air dan nutrisi pada bedeng kemarau hari ini sudah sesuai");


	React.useEffect(() => {
		datasoil.forEach((dtsoil) => {
			console.log("dtsoil", dtsoil);
			axios
				.get("https://api.sf2.ctailab.com/datalist", {
					params: {
						device_id: dtsoil.device_id,
						index_id: dtsoil.index_id,
					},
				})
				.then((res) => {
					console.log("res soil", res.data[0]);
					setSoil((prevState) => ({
						...prevState,
						[dtsoil.elementId]: res?.data[0] || "No data",
					}));
				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});

		
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

		datasoilA.forEach((dtsoilA) => {
			console.log("dtsoilA", dtsoilA);
			axios
				.get("https://api.sf2.ctailab.com/anomalyDetection", {
					params: {
						sensor_name: dtsoilA.sensor_name,
					},
				})
				.then((res) => {
					console.log("res soil", res.data[0]);
					setSoilA((prevState) => ({
						...prevState,
						[dtsoilA.elementId]: res?.data[0] || "No data",
					}));
				})
				.catch((err) => {
					console.log("error => ", err);
				});
		});


	}, []);


	React.useEffect(() => {
		if (dataB.irynan1.length && dataB.musan1.length) {
			let analysisText = "Pemberian air dan nutrisi pada bedeng hujan hari ini sudah sesuai";
			let issues = [];

			const irynan1 = dataB.irynan2[0]?.value || 0;
			const musan1 = dataB.musan1[0]?.value || 0;
			const irynap1 = dataB.irynap2[0]?.value || 0;
			const musap1 = dataB.musap1[0]?.value || 0;
			const irynak1 = dataB.irynak1[0]?.value || 0;
			const musak1 = dataB.musak1[0]?.value || 0;

			if (irynan1 !== musan1) {
				if (irynan1 < musan1) {
					issues.push(`kekurangan N sebanyak ${musan1 - irynan1}`);
				} else {
					issues.push(`kelebihan N sebanyak ${irynan1 - musan1}`);
				}
			}
			if (irynap1 !== musap1) {
				if (irynap1 < musap1) {
					issues.push(`kekurangan P sebanyak ${musap1 - irynap1}`);
				} else {
					issues.push(`kelebihan P sebanyak ${irynap1 - musap1}`);
				}
			}
			if (irynak1 !== musak1) {
				if (irynak1 < musak1) {
					issues.push(`kekurangan K sebanyak ${musak1 - irynak1}`);
				} else {
					issues.push(`kelebihan K sebanyak ${irynak1 - musak1}`);
				}
			}

			if (issues.length) {
				analysisText = `Pemberian nutrisi pada bedeng hujan  ${issues.join(', ')}`;
			}

			setAnalysis(analysisText);
		}
	}, [dataB]);


	React.useEffect(() => {
		if (dataB.irynan2.length && dataB.musan2.length) {
			let analysisText = "Pemberian air dan nutrisi pada bedeng kemarau hari ini sudah sesuai";
			let issues = [];

			const irynan2 = dataB.irynan2[0]?.value || 0;
			const musan2 = dataB.musan2[0]?.value || 0;
			const irynap2 = dataB.irynap2[0]?.value || 0;
			const musap2 = dataB.musap2[0]?.value || 0;
			const irynak2 = dataB.irynak2[0]?.value || 0;
			const musak2 = dataB.musak2[0]?.value || 0;

			if (irynan2 !== musan2) {
				if (irynan2 < musan2) {
					issues.push(`kekurangan N sebanyak ${musan2 - irynan2}`);
				} else {
					issues.push(`kelebihan N sebanyak ${irynan2 - musan2}`);
				}
			}
			if (irynap2 !== musap2) {
				if (irynap2 < musap2) {
					issues.push(`kekurangan P sebanyak ${musap2 - irynap2}`);
				} else {
					issues.push(`kelebihan P sebanyak ${irynap2 - musap2}`);
				}
			}
			if (irynak2 !== musak2) {
				if (irynak2 < musak2) {
					issues.push(`kekurangan K sebanyak ${musak2 - irynak2}`);
				} else {
					issues.push(`kelebihan K sebanyak ${irynak2 - musak2}`);
				}
			}

			if (issues.length) {
				analysisText = `Pemberian nutrisi pada bedeng kemarau  ${issues.join(', ')}`;
			}

			setAnalysisA(analysisText);
		}
	}, [dataB]);



	return (
		<Template userName="Fikri Rida P" title="Dashboard" page={Pages.Dashboard}>
			<div className="container-fluid">

				<div className="row">
					<div className="col-auto">
						<section className="grid grid-cols-2 gap-4 mt-12">
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="text-3xl font-semibold tracking-tight text-black text-center">
									Bedeng Kemarau
								</div>
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-3 items-center justify-center w-full">
										<span className="text-teal-500 text-center">
											{analysisA}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="text-3xl font-semibold tracking-tight text-black text-center">
									Bedeng Hujan
								</div>
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-3 items-center justify-center w-full">
										<span className="text-teal-500 text-center">
											{analysis}
										</span>
									</div>
								</div>
							</div>
						</section>



						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											Soil Moisture
										</h2>
										<div className="text-teal-500">
											sensor kelembaban tanah (nilai dalam analog)
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Baris
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Kemarau
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Hujan
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Manual
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												R1
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.kemaraur1?.value !== undefined ? ((632 - soil.kemaraur1.value) / (632 - 230) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C3R1_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.hujanr1?.value !== undefined ? ((332 - soil.hujanr1.value) / (332 - 100) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C2R1_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.manualr1?.value !== undefined ? ((362 - soil.manualr1.value) / (362 - 112) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C2R1_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												R2
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.kemaraur2?.value !== undefined ? ((254 - soil.kemaraur2.value) / (254 - 40) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C3R2_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.hujanr2?.value !== undefined ? ((345 - soil.hujanr2.value) / (345 - 120) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C2R2_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.manualr2?.value !== undefined ? ((340 - soil.manualr2.value) / (340 - 115) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C1R2_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												R3
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.kemaraur3?.value !== undefined ? ((254 - soil.kemaraur3.value) / (254 - 40) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C3R3_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.hujanr3?.value !== undefined ? ((351 - soil.hujanr3.value) / (351 - 60) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C2R3_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.manualr3?.value !== undefined ? ((375 - soil.manualr3.value) / (375 - 221) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C1R3_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												R4
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.kemaraur4?.value !== undefined ? ((309 - soil.kemaraur4.value) / (309 - 89) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C3R4_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.hujanr4?.value !== undefined ? ((250 - soil.hujanr4.value) / (250 - 91) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C2R4_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.manualr4?.value !== undefined ? ((404 - soil.manualr4.value) / (404 - 66) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C1R4_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												R5
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.kemaraur5?.value !== undefined ? ((632 - soil.kemaraur5.value) / (632 - 230) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C3R5_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.hujanr5?.value !== undefined ? ((270 - soil.hujanr5.value) / (270 - 90) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C2R5_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.manualr5?.value !== undefined ? ((310 - soil.manualr5.value) / (310 - 110) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C1R5_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												R6
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.kemaraur6?.value !== undefined ? ((295 - soil.kemaraur6.value) / (295 - 90) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C3R6_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{soil?.hujanr6?.value !== undefined ? ((285 - soil.hujanr6.value) / (285 - 95) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C2R6_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.manualr6?.value !== undefined ? ((260 - soil.manualr6.value) / (260 - 100) * 100).toFixed(2) : "Data bernilai 0"} %
												<br />
												{soilA?.SM_C1R6_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
										</div>

									</div>
								</div>
							</div>
						</section>

						<section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
							<div className="flex flex-col w-full p-5">
								<div className="flex gap-5 text-sm tracking-normal w-full">
									<div className="flex flex-col gap-3 w-full">
										<h2 className="text-2xl font-semibold tracking-tight text-black">
											PH dan Suhu Tanah
										</h2>
										<div className="text-teal-500">
											nilai PH dan suhu pada tanah
										</div>
										<div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium text-gray-400 border-b border-solid border-zinc-100">
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Sensor
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Bedeng
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Nilai
											</div>
											<div className="font-medium text-gray-400 w-full text-center justify-center items-center">
												Status
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												PH
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												Kemarau
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{(soil?.sensorph2?.value * 10)}
												<br />
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">

												{/* 													<br /> */}

												{soilA?.PH2A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}

											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												PH
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												Hujan
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{(soil?.sensorph1?.value * 10)}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.PH1A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>
										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												ST
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												Kemarau
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.sensorst2?.value}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.ST2A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>

										</div>
										<div className="flex flex-row gap-3 px-2 py-2 justify-between w-full font-medium border-b border-solid border-zinc-100">
											<div className="font-medium w-full text-center justify-center items-center content-center">
												ST
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												Hujan
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soil?.sensorst1?.value}
											</div>
											<div className="flex flex-col gap-4 font-medium w-full text-center justify-center items-center">
												{soilA?.ST1A_1?.anomaly === 1 ? (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-red-600 bg-red-200 border-red-600 bg-opacity-40 max-md:px-5">
														{"Anomali"}
													</div>
												) : (
													<div className="justify-center px-3 py-1 w-24 text-center rounded border text-emerald-500 border-emerald-500 border-solid bg-teal-500 bg-opacity-40 max-md:px-5">
														{"Normal"}
													</div>
												)}
											</div>

										</div>

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
