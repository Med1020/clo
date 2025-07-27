const baseUrl = import.meta.env.VITE_API_BASE_URL

export const fetchData = async () => {
 
  try {
    const response = await fetch(`${baseUrl}/api/data`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ key: 'value' }), // Uncomment for POST/PUT
    })

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Fetch error:', error)
  }
}
