let ran;
for (let i = 0; i <= 100000; i++) {
  ran = Math.floor(Math.random() * (9999 - 1)) + 1;
  console.log(ran + ' numero de aleatorio generado = ' + i);
}
