# Welcome to KeepJit

A flash card site to help you remember the things you have learned

## start in dev mod

```bash
npm start
```

## save collection data

mongoexport --db flashCards --collection cards --out scripts/flashtest.json

## upload collection data
mongoimport --db flashCards --collection cards --file scripts/flashtest.json

