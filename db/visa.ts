const DATABASE = [
	{
		route: "canada-immigrant-jobs-loans-visa",
		title: "Canada Immigrant Jobs and Loans: Visa Requirements",
		description:
			"Discover the essential visa requirements for immigrants aiming to work in Canada. This assessment evaluates your readiness for job opportunities and loans in the country.",
		result: 0,
		idx: 0,
		high: "Your responses indicate strong preparedness for pursuing job opportunities and obtaining loans as an immigrant in Canada. Seek professional guidance to ensure you meet all requirements.",
		low: "Further preparation may be needed before considering job opportunities and loans in Canada as an immigrant. Consult immigration experts for comprehensive guidance.",
		questions: [
			{
				question:
					"Have you thoroughly researched visa requirements for immigration and employment in Canada?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you possess the requisite qualifications and experience for your desired Canadian job?",
				answers: ["Yes", "No", "In Progress"],
				correct: "Yes",
			},
			{
				question:
					"Have you explored available job openings in Canada for immigrants?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with financial requirements and loan options for immigrants in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered the impact of Canada's cost of living on your financial plans?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Do you understand the process of obtaining loans as an immigrant in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed your loan eligibility based on your financial situation?",
				answers: ["Yes", "No", "In Progress"],
				correct: "Yes",
			},
			{
				question:
					"Do you comprehend the responsibilities and obligations associated with loans in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you sought advice from immigration experts or advisors regarding your job and loan plans?",
				answers: ["Yes", "No", "Planning to"],
				correct: "Yes",
			},
			{
				question:
					"Are you prepared to fulfill all requirements and obligations as an immigrant seeking jobs and loans in Canada?",
				answers: ["Yes", "No", "Getting There"],
				correct: "Yes",
			},
		],
	},
	{
		route: "usa-jobs-visa-requirements",
		title: "Jobs in USA: Visa Requirements for Immigrants",
		description:
			"Discover the visa requirements for immigrants interested in working in the USA and assess your preparedness for the application process.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it seems you're well-prepared to explore job opportunities in the USA. Consider consulting with immigration professionals for detailed guidance on visa procedures.",
		low: "Your answers indicate that you may need to enhance your readiness before pursuing job opportunities in the USA. Conduct thorough research on visa requirements and employment prospects to make informed decisions.",
		questions: [
			{
				question:
					"Do you have a clear understanding of the visa categories available for working in the USA?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you evaluated your eligibility for different types of U.S. work visas?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the documentation required for a work visa application?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered the potential timeframes for obtaining a work visa?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you understand the financial implications of obtaining a work visa?",
				answers: ["Yes", "No", "To Some Extent"],
				correct: "Yes",
			},
			{
				question:
					"Have you researched the job market and demand for your skills in the USA?",
				answers: ["Yes", "No", "In Progress"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with the process of obtaining a job offer from a U.S. employer?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you explored potential relocation challenges and solutions?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you understand the implications of U.S. taxation laws on your income?",
				answers: ["Yes", "No", "To Some Extent"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed the cultural and lifestyle differences between your home country and the USA?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
		],
	},
	{
		route: "canada-jobs-visa-requirements",
		title: "Jobs in Canada: Visa Requirements for Immigrants",
		description:
			"Explore the visa requirements for immigrants seeking employment in Canada and assess your readiness for the application process.",
		result: 0,
		idx: 0,
		high: "Based on your responses, it appears you may be well-prepared to explore job opportunities in Canada. It's advisable to consult with immigration experts to understand the visa procedures thoroughly.",
		low: "Your answers suggest that you may need to further prepare before considering job opportunities in Canada. Research and gather necessary information about visa requirements and job prospects before proceeding.",
		questions: [
			{
				question:
					"Do you have a clear understanding of the visa categories available for working in Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you evaluated your eligibility for different types of Canadian work permits?",
				answers: ["Yes", "No", "Partially"],
				correct: "Yes",
			},
			{
				question:
					"Are you aware of the documentation required for a Canadian work permit application?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you considered the potential processing times for obtaining a Canadian work permit?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you understand the financial requirements associated with obtaining a Canadian work permit?",
				answers: ["Yes", "No", "To Some Extent"],
				correct: "Yes",
			},
			{
				question:
					"Have you researched the job market and demand for your skills in Canada?",
				answers: ["Yes", "No", "In Progress"],
				correct: "Yes",
			},
			{
				question:
					"Are you familiar with the process of obtaining a job offer from a Canadian employer?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
			{
				question:
					"Have you explored potential settlement challenges and solutions in Canada?",
				answers: ["Yes", "No", "Not Yet"],
				correct: "Yes",
			},
			{
				question:
					"Do you understand the implications of Canadian taxation laws on your income?",
				answers: ["Yes", "No", "To Some Extent"],
				correct: "Yes",
			},
			{
				question:
					"Have you assessed the cultural and lifestyle differences between your home country and Canada?",
				answers: ["Yes", "No", "Somewhat"],
				correct: "Yes",
			},
		],
	},
];

export const queryArr = [
	"jobs-you-can-get-with-a-degree-in-healthcare-administration",
	"job-benefits-in-canada",
	"what-jobs-can-i-get-in-healthcare-administration",
	"free-job-posting-sites-in-canada",
	"what-jobs-can-you-get-with-masters-in-healthcare-administration",
	"jobs-in-alberta-canada-for-foreign-workers",
	"can-you-do-job-costing-in-quickbooks-online",
	"where-can-i-post-jobs-for-free-in-usa",
	"free-job-portals-in-canada",
	"what-jobs-can-i-get-with-mba-in-healthcare-management",
	"what-jobs-can-you-get-with-masters-in-social-work",
	"can-you-get-a-job-in-cybersecurity-without-a-degree",
	"canada-job-agency-in-myanmar",
	"what-jobs-can-i-get-with-a-masters-in-counseling",
	"what-jobs-can-you-get-with-a-masters-in-counseling",
	"how-can-i-get-a-job-in-cyber-security",
	"what-job-can-i-get-with-a-degree-in-criminology",
	"what-jobs-can-i-get-with-a-degree-in-criminology",
	"jobs-you-can-get-with-a-masters-in-accounting",
	"temporary-jobs-in-canada",
	"can-you-choose-your-job-in-the-navy",
	"what-jobs-can-you-get-with-an-mba-in-finance",
	"lmia-jobs-in-canada-with-visa-sponsorship",
	"jobs-you-can-get-with-a-masters-in-cyber-security",
	"what-job-can-i-get-with-masters-in-psychology",
	"what-jobs-can-i-get-with-masters-in-psychology",
	"can-you-get-a-job-in-it-without-a-degree",
	"can-you-get-a-job-in-coding-without-a-degree",
	"can-you-get-a-job-in-it-with-just-certifications",
	"lmia-approved-truck-driver-jobs-in-canada",
	"can-i-get-a-job-in-coding-without-a-degree",
	"jobs-you-can-get-with-a-masters-in-health-administration",
	"jobs-you-can-get-with-a-masters-in-social-work",
	"job-posting-in-canada",
	"job-postings-in-canada",
	"post-jobs-in-canada",
	"what-jobs-can-a-degree-in-business-management-get-you",
	"can-you-get-a-job-with-an-associates-in-nursing",
	"what-jobs-can-i-get-in-cyber-security",
	"what-jobs-can-you-get-with-masters-in-public-health",
	"jobs-you-can-get-with-a-degree-in-social-work",
	"jobs-you-can-get-in-the-army",
	"what-jobs-can-you-get-in-cyber-security",
	"can-you-pick-your-job-in-the-air-force",
	"what-jobs-can-you-do-in-the-army",
	"can-you-choose-your-job-in-the-air-force",
	"can-i-get-a-job-in-google",
	"what-jobs-can-i-get-with-an-mba-in-finance",
	"how-can-i-get-a-job-in-ai",
	"what-job-can-you-get-in-business-administration",
	"what-jobs-can-you-get-in-business-administration",
	"can-i-invest-in-roth-ira-without-a-job",
	"contract-job-in-canada",
	"contract-jobs-in-canada",
	"how-can-ai-help-me-in-my-job",
	"monster-jobs-in-canada",
	"jobs-you-can-do-with-a-masters-in-public-health",
	"job-contract-in-canada",
	"jobs-you-can-get-with-an-mba-in-healthcare-management",
	"can-i-get-a-job-in-programming-without-a-degree",
	"what-jobs-can-i-get-in-computer-science",
	"what-jobs-can-you-get-with-a-masters-in-biotechnology",
	"can-i-choose-my-job-in-the-air-force",
	"can-i-pick-my-job-in-the-air-force",
	"canada-job-agency-in-philippines",
	"canada-jobs-agency-in-philippines",
	"what-jobs-can-you-get-with-a-bachelors-in-nursing",
	"what-jobs-can-you-get-with-a-bachelors-in-nursing",
	"how-much-is-a-boob-job-in-canada",
	"what-jobs-can-u-get-with-a-bachelors-in-psychology",
	"what-jobs-can-u-get-with-a-bachelors-in-psychology",
	"can-i-get-a-job-in-it-without-a-degree",
	"what-jobs-can-a-medical-assistant-do-in-a-hospital",
	"what-jobs-can-you-get-with-a-degree-in-accounting",
	"jobs-you-can-get-in-criminal-justice",
	"virtual-assistant-job-in-canada",
	"virtual-assistant-jobs-in-canada",
	"how-can-i-get-a-job-in-the-music-industry",
	"what-jobs-can-i-get-with-a-masters-in-psychology",
	"can-you-get-a-job-with-a-masters-in-psychology",
	"jobs-you-can-get-with-a-masters-degree-in-psychology",
	"jobs-you-can-get-with-a-masters-in-psychology",
	"jobs-you-can-get-with-masters-in-psychology",
	"what-job-can-i-get-with-a-masters-in-psychology",
	"what-job-can-you-get-with-a-masters-in-psychology",
	"what-jobs-can-a-masters-in-psychology-get-you",
	"what-jobs-can-i-get-with-a-master-in-psychology",
	"what-jobs-can-you-get-with-a-masters-in-psychology",
	"jobs-you-can-get-in-the-air-force",
	"how-can-i-get-a-teaching-job-in-usa",
	"what-jobs-can-i-get-with-a-degree-in-accounting",
	"what-jobs-can-you-get-in-data-science",
	"jobs-you-can-do-in-the-army",
	"agencies-for-jobs-in-canada",
	"agency-for-job-in-canada",
	"agency-for-jobs-in-canada",
	"job-agencies-in-canada",
	"job-agency-in-canada",
	"job-agent-in-canada",
	"job-agents-in-canada",
	"job-placement-agencies-in-canada",
	"job-placement-agency-in-canada",
	"job-placement-in-canada",
	"job-recruiting-agencies-in-canada",
	"job-recruitment-agencies-in-canada",
	"job-recruitment-agency-in-canada",
	"jobs-agencies-in-canada",
	"jobs-agency-in-canada",
	"jobs-agent-in-canada",
	"jobs-agents-in-canada",
	"jobs-you-can-get-with-a-masters-in-criminal-justice",
	"conservation-jobs-in-canada",
	"can-you-switch-jobs-in-the-military",
	"how-can-i-use-ai-in-my-job",
];
export default DATABASE;
