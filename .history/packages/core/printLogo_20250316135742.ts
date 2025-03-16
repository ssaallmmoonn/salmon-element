export default function () {
	if (PROD) {
		const logo = `
___________________________________________________

  _____   _                     __     __  _       
 |_   _| | |                    \\ \\   / / (_)      
   | |   | |     _____   _____   \\ \\_/ /   _   ___ 
   | |   | |    / _ \\ \\ / / _ \\   \\   /   | | / __|
  _| |_  | |___| (_) \\ V /  __/    | |    | | \\__ \\
 |_____| |______\\___/ \\_/ \\___|    |_|    |_| |___/

___________________________________________________
                 author:superSalmon
`;

		const rainbowGradient = `
background: linear-gradient(135deg, orange 60%, cyan);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
font-size: 16px; 
line-height: 1.2;
font-family: monospace;
font-weight: 600;
white-space: pre; 
`;

		console.info(`%c${logo}`, rainbowGradient);
	} else if (DEV) {
		console.log('[YisUI]:dev mode...');
	}
}
