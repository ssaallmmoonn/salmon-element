export default function () {
	if (PROD) {
		const logo = `
________________________________________________
  _____   _                     __     __  _       
 |_   _| | |                    \ \   / / (_)      
   | |   | |     _____   _____   \ \_/ /   _   ___ 
   | |   | |    / _ \ \ / / _ \   \   /   | | / __|
  _| |_  | |___| (_) \ V /  __/    | |    | | \__ \
 |_____| |______\___/ \_/ \___|    |_|    |_| |___/
                                                  
                                                
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
