let input;
let slider;
let button;
let isJumping = false;
let sizeLabel;
let dropdown;

function setup() {  //執行一次
  //產生一個畫布，充滿整個視窗，顏色為#E1BB80
  createCanvas(windowWidth, windowHeight).style('display', 'block');
  background('#E1BB80');

  // 創建一個輸入框
  input = createInput('大江大海江大海');
  input.position(10, 10);//設定輸入框的位置
  //設定輸入框的大小為長30寬300
  input.size(300, 30);
  //設定輸入框的字體大小為32
  input.style('font-size', '32px');
  //設定輸入框的背景色為#352208
  input.style('background-color', '#352208');
  //設定輸入框的邊框為3
  input.style('border', '3px solid #423924');
  //設定輸入框的文字顏色為#685634
  input.style('color', '#685634');

  // 創建一個滑桿
  slider = createSlider(5, 30, 30);//設定滑桿的範圍為5到30，初始值為30
  slider.position(10, 45);//設定滑桿的位置
  slider.size(300);

  // 創建一個顯示文字大小的標籤
  sizeLabel = createDiv('文字大小: 30px');//設定標籤的文字
  sizeLabel.position(320, 45);//設定標籤的位置
  sizeLabel.style('font-size', '20px');
  sizeLabel.style('color', '#685634');

  // 創建一個按鈕
  button = createButton('跳動');
  button.position(350, 0);//設定按鈕的位置
  button.size(100, 50);
  button.style('background-color', '#352208');
  button.style('border', '3px solid #423924');
  button.style('color', '#685634');
  button.style('font-size', '25px');
  button.style('text-align', 'center');
  button.style('font-weight', 'bold');
  button.style('justify-content', 'center');
  button.mousePressed(toggleJumping);

  // 創建一個下拉式選單
  dropdown = createSelect();
  dropdown.position(800, 10);
  dropdown.size(100);
  dropdown.option('瑞克搖');
  dropdown.option('雞你太美');
  dropdown.changed(openLink);
}

function toggleJumping() {
  isJumping = !isJumping;//切換跳動狀態
  if (isJumping) {
    button.html('停止');
  } else {
    button.html('跳動');
  }
}

function openLink() {
  let selected = dropdown.value();
  if (selected === '瑞克搖') {
    window.open('https://youtu.be/dQw4w9WgXcQ?si=vAUCAS0gjPPsLdGT', '_blank');
  } else if (selected === '雞你太美') {
    window.open('https://youtu.be/GLu5YwiAtC4?si=RY_HONUVGPESCBLn', '_blank');
  }
}

function draw() {//重複執行
  background('#E1BB80'); // 清除之前的畫面
  let textContent = input.value(); // 獲取輸入框中的文字
  let textSizeValue = slider.value(); // 根據滑桿的值設置文字大小
  textSize(textSizeValue);
  sizeLabel.html('文字大小: ' + textSizeValue + 'px'); // 更新標籤文字
  let textWidthValue = textWidth(textContent);
  let startX = 0; // 從畫布的左邊開始
  let startY = 100; // 上方空100
  let gap = textSizeValue / 8; // 每串文字中間的空格大小，調整為文字大小的1/8

  for (let y = startY; y < height; y += textSizeValue + gap) {
    for (let x = startX; x < width; x += textWidthValue + gap) {
      fill('#7B6B43');
      if (isJumping) {
        let jump = sin(frameCount * 0.1) * 5; // 使文字跳動範圍為±5px
        text(textContent, x, y + jump);
      } else {
        text(textContent, x, y);
      }
    }
  }
}