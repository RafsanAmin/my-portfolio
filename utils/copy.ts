const copy = (text: string): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert('Text Copied!');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default copy;
