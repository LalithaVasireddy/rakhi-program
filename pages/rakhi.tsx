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

		var youTubeUrl = "https://www.youtube.com/watch?v=iplZGpP2VO0";
		
		if(router.query.lan == "tam")
			youTubeUrl = "https://www.youtube.com/watch?v=vRiPWGono4s";
		else if(router.query.lan == "hin")
			youTubeUrl = "https://www.youtube.com/watch?v=IIbBI-BT9c4";
		else if(router.query.lan == "tel")
			youTubeUrl = "https://www.youtube.com/watch?v=dUXk8Nc5qQ8";

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
						console.log(res)
						const data = await res.json();
						setCardInfo(data);
						console.log(cardInfo);
						return data;
					}					
					
				} catch (error) {
					console.log(error);
				}
			};
			fetchData();
		}, [queryParam]);
		
		const handleGaveBlessing = ({played}) => {
			if(played >= 0.10 && !GaveBlessing) {			
				setGaveBlessing(true)			
			}
		}
			
		return (
			<div>
				<Head>
				<title>Rakhi Experience</title>					
			</Head>
			<div className="">
					<div className="">
						<div className="">
								<div className="player-wrapper">
										<ReactPlayer className="react-player"
										url={youTubeUrl}
										width="100%"
										height="100%"
										playing
										onProgress={handleGaveBlessing}
										/>
									</div>
									<br></br>
									<div className="box">{GaveBlessing ? cardInfo["disp_name"] + " " + cardInfo["slogan"] : ""} </div>
								</div>
						</div>
					</div>
			</div>				
		);
	};
	

