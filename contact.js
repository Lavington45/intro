export default async function handler(req, res) {
	if(req.method !== 'POST') {
		return res.status(405).json({message: 'Method not allowed' });
	}
	const{name,email,message} = req.body;
	//simple validation (optional)
	if(!name || !email || !message) {
		return res.status(400).json({message: 'All fields are required.'});
	}
	//For now, just log it (in real use, you might email it or store it)
	console.log('Message received:', {name, email, message});
	return res.status(200).json({message:'Message sent successfully!' });
}