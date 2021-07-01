export const getMemes = async () => {
  try {
    const fetched = await fetch('https://api.imgflip.com/get_memes');
    // if (!fetched.success) throw new Error();
    return fetched.json();
  } catch(err) {
    return err;
  }
}