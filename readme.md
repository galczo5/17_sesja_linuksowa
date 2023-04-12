# 17 Sesja Linuksowa
Czemu znowu ten Javascript…? 

## Przygotowanie

```bash
npm init
```

```bash
npm i --save typescript esbuild commander @types/node colors
```

```bash
mkdir dist
```

```bash
echo 'dist/' > .gitignore 
```

```bash
mkdir src
```

```bash
echo 'console.log("test");' > index.ts
```

## Build

W pliku `package.json` dodać skrypt:

```
"build": "esbuild index.ts --bundle --platform=node --outdir=dist"
```

Dodać `bin` w `package.json`:
```
"17sl": "node ./dist/index.js"
```

Dla uproszczenia dodać wskazanie interpretera do `index.ts`:
```
#!/usr/local/bin/node
```

Zrobić link do testów
```bash
sudo npm link
```

Polecenie do buildu:
```bash
npm run build
```

## Plik jokes.js

```typescript
const jokes = [
  "Why did the programmer quit his job? He didn't get arrays.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do JavaScript developers prefer using their laptops? Because they don't know how to CTRL + C and CTRL + V on paper.",
  "Why did the React component feel lonely? Because it didn't have state to share.",
  "Why do CSS developers hate nature? Because they always need to clear their floats.",
  "Why did the website go to the doctor? Because it had too many hits.",
  "Why do web developers prefer dogs? Because they love fetch() requests.",
  "Why do developers prefer dark chocolate? Because it's the best practice.",
  "Why do Angular developers wear glasses? Because they can't C#.",
  "Why do jQuery developers love nature? Because they love to $(document).ready()",
  "Why did the database administrator leave his wife? She had one-to-many relationships.",
  "Why did the developer go broke? He used up all his cache.",
  "Why did the programmer quit his job? He didn't get Inheritance.",
  "Why did the programmer give up debugging? Because he didn't know how to solve the Bug.",
  "Why did the programmer go broke? He used up all his cache.",
  "Why did the computer go to the doctor? It had a virus!",
  "Why do programmers wear glasses? Because they can't C#.",
  "Why did the computer keep sneezing? It had a virus!",
  "Why did the website break up with the web browser? Because they had too many pop-ups.",
  "Why don't programmers like nature? It has too many bugs.",
  "Why do Java developers wear glasses? Because they can't C#.",
  "Why did the front-end developer break up with the UI designer? They weren't on the same responsive design.",
  "Why did the website feel cold? Because it left its backend open.",
  "Why do developers prefer dark themes? Because light attracts bugs.",
  "Why did the JavaScript developer wear glasses? Because he couldn't C#.",
  "Why did the computer get cold? Because it left its Windows open!",
  "Why did the web developer go broke? Because he used up all his cache.",
  "Why did the web designer drown? He didn't have a float property set.",
  "Why did the developer go bankrupt? He ran out of cache.",
  "Why did the website turn blue? Because it had too many links.",
  "Why do web developers hate Halloween? Because they don't know how to wear a class.",
  "Why do programmers prefer dark chocolate? Because it's the most efficient.",
  "Why did the programmer break up with his girlfriend? Because he wanted his code to run faster.",
  "Why did the website refuse to run on the new server? It didn't have enough JavaScript to run.",
  "Why did the website feel insecure? It didn't have a secure SSL.",
  "Why did the website crash on Black Friday? Too many users were shopping carts.",
  "Why did the website go to the doctor? Because it had too many redirects.",
  "Why do developers hate nature? It has too many bugs.",
  "Why did the computer go to the eye doctor? Because it had a screen problem.",
  "Why did the programmer get stuck in the shower? He forgot to exit his loop.",
  "Why did the frontend developer go bankrupt? He spent all his money on JavaScript libraries.",
  "Why did the web designer get fired? He didn't know how to float.",
];
```

## Electron

```bash
npm create vite@latest
```

```bash
cd joker && npm install && npm run dev
```

Poprawić build w `joker/package.json`:
```
"build": "tsc && vite build --base=./"
```

```bash
cd joker && npm run build && cd ..
```

```bash
npm install --save electron @types/electron
```
