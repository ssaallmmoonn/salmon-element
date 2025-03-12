export default function () {
	if (PROD) {
		const logo = `
________________________________________________
   _____   _                     __     _______  _____ 
 |_   _| | |                    \ \   / /_   _|/ ____|
   | |   | |     _____   _____   \ \_/ /  | | | (___  
   | |   | |    / _ \ \ / / _ \   \   /   | |  \___ \ 
  _| |_  | |___| (_) \ V /  __/    | |   _| |_ ____) |
 |_____| |______\___/ \_/ \___|    |_|  |_____|_____/ 
                                                      
________________________________________________
              author:superSalmon
`;

		const rainbowGradient = `
background: linear-gradient(135deg, orange 60%, cyan);
background-clip: text;
color: transparent;
font-size: 16px; 
line-height: 1;
font-family: monospace;
font-weight: 600;
`;

		console.info(`%c${logo}`, rainbowGradient);
	} else if (DEV) {
		console.log('[EricUI]:dev mode...');
	}
}
