import React, {useEffect, useState } from 'react';

import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import { setTimeout } from 'timers';
import Head from 'next/head';

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

	export default function Rakhi()  {
		const router = useRouter();
		const query = router.query;
		const [cardInfo, setCardInfo] = useState({});
		const [queryParam, setQueryParam] = useState({});			
		const [GaveBlessing, setGaveBlessing] = useState(false);
		const [WatchComplete, setWatchComplete] = useState(false);

		var youTubeUrl = "https://youtu.be/ecF3fKaSb0Q";
		
		if(router.query.lan == "tam")
			youTubeUrl = "https://youtu.be/vFhhN4JpqgY";
		else if(router.query.lan == "hin")
			youTubeUrl = "https://youtu.be/TO2h9hqNVQ4";
		else if(router.query.lan == "tel")
			youTubeUrl = "https://youtu.be/An-RPrXreOc";

		useEffect(() => {
			if (router.isReady) {
				const _qryParam = router.query;
				setQueryParam(_qryParam); 
			}
			}, [router.query]);
	
		useEffect(() => {
			const fetchData = async () => {
				try {	
					if(queryParam["lan"])
					{
						const url = `https://script.google.com/macros/s/AKfycbxwVnTDPA1PS5UZ84632l42_Lh0e3BYmRXq-xInfg/exec?fullname=${queryParam["name"]}&lang=${queryParam["lan"]}`;
						
						const res = await fetch(`${url}`);
						const data = await res.json();
						setCardInfo(data);
						return data;
					}					
					
				} catch (error) {
					console.log(error);
				}
			};
			fetchData();
		}, [queryParam]);
		
		const handleGaveBlessing = ({played, playedSeconds}) => {
			if(playedSeconds >= 140 && !GaveBlessing) {			
				setGaveBlessing(true)							
			}
			if(playedSeconds >= 176) {			
				setWatchComplete(true)							
			}
		}
			
		return (
			<div>
				<Head>
				<title>Rakhi Experience 2021</title>					
			</Head>
			<div className="">
					<div className="">
						<div className="">
							{
								!WatchComplete && (
									<div className="player-wrapper">
										<ReactPlayer className="react-player"
										url={youTubeUrl}
										width="100%"
										height="100%"
										playing
										onProgress={handleGaveBlessing}										
										/>
									</div>
								)
							}
							{
								WatchComplete && (
									<div className="thankyou"><div>Thank you for joining the Australian Virtual Centre online Rakhi</div><br />
									<div>Please join our meditation classes / workshops on</div>
									<div><a href="https://brahmakumaris.org.au/new/virtual-centre">https://brahmakumaris.org.au/new/virtual-centre</a></div>
									</div>
								)
							}
								
									<br></br>
									{
										GaveBlessing && (
											<div className= {WatchComplete ? "boxEnd" : "box"}>												
										<div className="name">{cardInfo["disp_name"]}</div>
										<div className="slogan">{cardInfo["slogan"]} </div></div>
										)
									}									
								</div>
						</div>
					</div>
			</div>				
		);
	};
	

