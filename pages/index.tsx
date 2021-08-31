import React, {useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const preventDefault = (f) => (e) => {
	e.preventDefault();
	f(e);
};

	export default function Home({ action = '/rakhi' })  {
		const router = useRouter();
		const query = router.query;		
		const [inputValue, setInputValue] = useState('');
		const [lang, setLang] = useState('eng');		

		const handleSubmit = preventDefault(() => {
			// Show Progress
			router.push({
				pathname: action,
				query: {
					name: inputValue,
					lan: lang,
				},
			});
		});
		const handleChange = (event) => {
			setInputValue(event.target.value);
			
		}
		const handleRadioChange = (event) => {		
				setLang(event.target.value);		
		  };
			
		return (
			<div>
				<Head>
				<title>Rakhi Experience 2021</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />					
			</Head>
			<div className="">				
					<div className="outer">
						<div className="middle">	
						<div className="">	
						{true &&
						<div className="thankyou"><div>Rakhi event has now ended.</div><br />
						<div>We look forward to seeing you for a beautiful Diwali experience later this year!</div><br />
						<div>Thank you</div>
						</div>
							}	
							{false && (
								<form onSubmit={handleSubmit}>	
								<div className="heading"></div>								
								<br></br><br/><br/>
								
								
									<div><input type="text" placeholder="Please enter your name" autoFocus onChange={handleChange}></input></div>
									<br />
									<div className="radio-toolbar">
									<input type="radio" value="eng" id="radioEnglish" name="language" onChange={handleRadioChange} checked={lang === 'eng'}/>
									<label htmlFor="radioEnglish">English</label> 
									<input type="radio" value="hin" id="radioHindi" name="language" onChange={handleRadioChange} checked={lang === 'hin'}/> 
									<label htmlFor="radioHindi">हिंदी</label>
									<input type="radio" value="tam" id="radioTamil" name="language" onChange={handleRadioChange} checked={lang === 'tam'}/> 
									<label htmlFor="radioTamil">தமிழ்</label>								
									<input type="radio" value="tel" id="radioTelugu" name="language" onChange={handleRadioChange} checked={lang === 'tel'}/> 
									<label htmlFor="radioTelugu">తెలుగు</label>
								</div>	<br />
									<div className="buttonClass"><button className="button"><b>Let’s Begin</b></button></div>								
								</form>	
							)}				
							
							</div>						
						</div>
					</div>
			</div>	
			</div>
		);
	};
	

