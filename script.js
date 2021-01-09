const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 450;

const image1 = new Image();
image1.src = './harboiled.jpg'

image1.addEventListener('load', function(){
  ctx.drawImage(image1, 0, 0, canvas.width/1, canvas.height);
  const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height)
  console.log(scannedImage)
  const scannedData = scannedImage.data;
  for (let i = 0; i < scannedData.length; i += 4){
    const total = scannedData[i] + scannedData[i+1] + scannedData[i +2];
    const averagColorValue = total/3;
    scannedData[i] = averagColorValue;
    scannedData[i + 1] = averagColorValue;
    scannedData[i + 2] = averagColorValue;
    }
    scannedImage.data = scannedData;
    ctx.putImageData(scannedImage, 0, 0)
})