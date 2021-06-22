export const getKitty = async (width: number, height: number) => {
  try {
    const fetchedKitty = await fetch(`http://placekitten.com/${width}/${height}`)
    return fetchedKitty;
  } catch(err) {
    return err;
  }
}