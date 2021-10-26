### Estrutura inicial (27:00)

- Configurar package.jon
```
npm init -y
```
```
yarn init -y
```
<br>

- Instalar express e cors como dependencias
```
yarn add express cors
```

- Criar estrutura inicial de diretórios src, app, controllers, middlewares, models 
- Adicionar arquivo .gitkeep em pastas vazias
- Criar arquivo index.js e rodar servidor na porta 3000
```
const express = require('express');

const app = express();

app.listen(3000, () => console.log('Server running on port 3000))
```
