const work = async (canvas) => {
  const worker = await Tesseract.createWorker('eng');
  const ret = await worker.recognize(canvas);
  const text = ret.data.text;
  await worker.terminate();
  return text;
}

export { work }
