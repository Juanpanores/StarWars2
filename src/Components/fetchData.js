export const fetchData = async () => {
    try {
      const response = await Promise.all(
        fetch('https://swapi.dev/api/people/').then(res => res.json())
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log('Error', error);
    }
  }