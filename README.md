# Real-time-collaborative-sandpack

This example shows how you can use Sandpack and firepad-x to build a collbrative text editor.

https://user-images.githubusercontent.com/52914487/181750695-f7d5bb29-7d40-46ff-a316-5fdf31c1cc4b.mp4


## Running locally
### Step 1. Clone the repo
```bash
git clone https://github.com/hussamkhatib/Real-time-collaborative-sandpack.git`
```
### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

### Step 3. Run in development mode 
```bash
yarn install
yarn dev
```

Credits:
- [Sandpack](https://sandpack.codesandbox.io/)
- [firepad-x](https://github.com/interviewstreet/firepad-x)
- [Collaborative Coding in Monaco Editor - Shubham Shekhar](https://dev.to/shubham567/collaborative-coding-in-monaco-editor-4foa)
