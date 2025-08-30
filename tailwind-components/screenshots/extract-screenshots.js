import fs from "fs";

const trace = JSON.parse(fs.readFileSync("trace.json", "utf8"));
// Perf traces usually keep events in trace.traceEvents
const events = trace.traceEvents || trace.events || [];

let i = 0;
for (const e of events) {
  if (e.name === "Screenshot" && e.args && e.args.snapshot) {
    const data = e.args.snapshot; // "data:image/png;base64,...."
    const b64 = data.includes(",") ? data.split(",")[1] : data;
    const fname = `frame-${String(i).padStart(4, "0")}.png`;
    fs.writeFileSync(fname, Buffer.from(b64, "base64"));
    i++;
  }
}
console.log(`Saved ${i} frames`);
