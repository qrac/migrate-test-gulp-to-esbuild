import esbuild from "esbuild"

async function build({
  entryPoints,
  entryNames,
  outbase,
  outdir,
  minify,
  isWatch,
}) {
  const options = {
    entryPoints,
    entryNames,
    outbase,
    outdir,
    bundle: true,
    minify: minify,
    bundle: true,
    logLevel: "info",
  }

  if (isWatch) {
    let ctx = await esbuild.context(options)
    await ctx.watch()
    console.log("watching...")
  } else {
    await esbuild.build(options).catch(() => {
      process.exit(1)
    })
  }
}

const isWatch = process.argv.includes("-w")

Promise.all([
  build({
    entryPoints: ["./src/assets/pc/css/*.css", "./src/assets/smp/css/*.css"],
    entryNames: "[name]",
    outbase: "./src/assets",
    outdir: "./dist/assets/css",
    minify: false,
    isWatch,
  }),
  build({
    entryPoints: ["./src/assets/pc/css/*.css", "./src/assets/smp/css/*.css"],
    entryNames: "[name].min",
    outbase: "./src/assets",
    outdir: "./dist/assets/css",
    minify: true,
    isWatch,
  }),
  build({
    entryPoints: ["./src/assets2/**/*.js"],
    entryNames: "[dir]/[name]",
    outbase: "./src/assets2",
    outdir: "./dist",
    minify: true,
    isWatch,
  }),
])
