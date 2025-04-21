// API endpoint to return a token
export default function handler(req, res) {
  // Get token from query parameter
  const { data } = req.query;
  
  // If no data parameter is provided, return 400 error
  if (!data) {
    return res.status(400).json({ error: "Data parameter is required" });
  }
  
  // Return token in JSON format
  res.status(200).json({ "token": data });
} 