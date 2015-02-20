# play-rust
============

## Build & run
You will need to have gulp installed globally then you can do this to start:

```bash
git clone git@github.com:RustBerlin/try-rust.git
cd try-rust
npm install
gulp
```

## Tutorials
You can add tutorials into try-rust/src/tutorials. Just consider this:

- url structure will be tutorials/FOLDERNAME/FILENAME
- you always need to create a FILENAME.md and FILENAME.rs file

By opening the url /FOLDERNAME/FILENAME you will load the files
/src/tutorials/FOLDERNAME/FILENAME.rs and /src/tutorials/FOLDERNAME/FILENAME.md