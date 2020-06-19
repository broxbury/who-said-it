export const kanyeQuote = async () => {
  try {
    const response = await fetch('https://api.kanye.rest');
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch {
    return 'OOPS Something went wrong! Try Again!'
  }
}

export const trumpQuote = async () => {
  try {
    const response = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch {
    return 'OOPS Something went wrong! Try Again!'
  }
}


