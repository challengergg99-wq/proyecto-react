export const fireColorsPalette = [
  [0, 0, 0],
  [7, 7, 7],
  [31, 7, 7],
  [47, 15, 7],
  [71, 15, 7],
  [87, 23, 7],
  [103, 31, 7],
  [119, 31, 7],
  [143, 39, 7],
  [159, 47, 7],
  [175, 63, 7],
  [191, 71, 7],
  [199, 71, 7],
  [223, 79, 7],
  [223, 87, 7],
  [223, 87, 7],
  [215, 95, 7],
  [215, 95, 7],
  [215, 103, 15],
  [207, 111, 15],
  [207, 119, 15],
  [207, 127, 15],
  [207, 135, 23],
  [199, 135, 23],
  [199, 143, 23],
  [199, 151, 31],
  [191, 159, 31],
  [191, 159, 31],
  [191, 167, 39],
  [191, 167, 39],
  [191, 175, 47],
  [183, 175, 47],
  [183, 183, 47],
  [183, 183, 55],
  [207, 207, 111],
  [223, 223, 159],
  [239, 239, 199],
  [255, 255, 255],
];

export function createFireDataStructure(width, height) {
  return new Uint8Array(width * height);
}

export function updateFireIntensityPerPixel(firePixelsArray, currentPixelIndex, width, height) {
  const belowPixelIndex = currentPixelIndex + width;
  if (belowPixelIndex >= width * height) {
    return;
  }

  const decay = Math.floor(Math.random() * 1.2);
  const belowPixelFireIntensity = firePixelsArray[belowPixelIndex];
  const newFireIntensity = belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0;
  firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
}

export function calculateFirePropagation(firePixelsArray, width, height) {
  for (let x = 0; x < width; x += 1) {
    for (let y = 1; y < height; y += 1) {
      const pixelIndex = x + y * width;
      updateFireIntensityPerPixel(firePixelsArray, pixelIndex, width, height);
    }
  }
}

export function renderFire(ctx, firePixelsArray, fireColorsPalette, width, height) {
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const pixelIndex = x + y * width;
      const fireIntensity = firePixelsArray[pixelIndex];
      const color = fireColorsPalette[fireIntensity] || [0, 0, 0];
      const dataIndex = (x + y * width) * 4;
      data[dataIndex] = color[0];
      data[dataIndex + 1] = color[1];
      data[dataIndex + 2] = color[2];
      data[dataIndex + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

export function createFireSource(firePixelsArray, width, height) {
  const overflowPixelIndex = width * height;
  for (let x = 0; x < width; x += 1) {
    const pixelIndex = overflowPixelIndex - width + x;
    firePixelsArray[pixelIndex] = 36;
  }
}

// export function updateFPS(fpsContainer, deltaTime, frameCount) {
//   if (frameCount % 10 === 0) {
//     const fps = Math.round(1000 / (deltaTime / 10));
//     fpsContainer.innerText = `FPS: ${fps}`;
//   }
// }









