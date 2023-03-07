let faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  let total = 0;
  for (let estado in faturamento) {
    total += faturamento[estado];
  }
  
  let percentual = {};
  for (let estado in faturamento) {
    percentual[estado] = (faturamento[estado] / total) * 100;
  }
  
  console.log("Percentual de representação por estado:");
  for (let estado in percentual) {
    console.log(`${estado}: ${percentual[estado].toFixed(2)}%`);
  }