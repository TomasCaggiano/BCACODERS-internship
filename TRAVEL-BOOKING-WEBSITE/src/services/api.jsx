
export const fetchDestinations = async () => {
  try {
    const response = await fetch('/destinations.json');
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch destinations:', error);
    throw error;
  }
};
export const fetchFlights = async () => {
  try {
    const response = await fetch('/flights.json');
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch flights:', error);
    throw error;
  }
};
