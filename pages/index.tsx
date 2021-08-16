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
			</Head>
			<div className="">				
					<div className="outer">
						<div className="middle">	
						<div className="inner">					
							<form onSubmit={handleSubmit}>	
							<div className="heading">Rakhi Experience 2021</div>								
							<br></br>				
								<div><input type="text" placeholder="Please enter your name" onChange={handleChange}></input></div>
								<br />
								<div className="radio-toolbar">
								<input type="radio" value="eng" id="radioEnglish" name="language" onChange={handleRadioChange} checked={lang === 'eng'}/>
								<label htmlFor="radioEnglish">English</label> 
								<input type="radio" value="tam" id="radioTamil" name="language" onChange={handleRadioChange} checked={lang === 'tam'}/> 
								<label htmlFor="radioTamil">Tamil</label>
								<input type="radio" value="hin" id="radioHindi" name="language" onChange={handleRadioChange} checked={lang === 'hin'}/> 
								<label htmlFor="radioHindi">Hindi</label>
								<input type="radio" value="tel" id="radioTelugu" name="language" onChange={handleRadioChange} checked={lang === 'tel'}/> 
								<label htmlFor="radioTelugu">Telugu</label>
							</div>	<br />
								<div className="buttonClass"><button className="button">Let’s Begin</button></div>								
							</form>	
							</div>						
						</div>
					</div>
			</div>	
			</div>
		);
	};
	

