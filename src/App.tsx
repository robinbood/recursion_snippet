const App = () => {
  const pow = (x: number, n: number): number => {
    if (n === 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  };
};

export const App2 = () => {
  const pow = (x: number, n: number): number => {
    return n === 1 ? x : x * pow(x, n - 1);
  };
};

export class App3 {
  name: number;
  constructor(name: number) {
    this.name = name;
  }
  method1(speech: string) {
    alert(speech);
  }
}

export const Vibe = () => {
  const text = new TextEncoder();
  const Uint8Array = text.encode("Hello");
  alert(Uint8Array);
};

export const CSV = (File: File) => {
  const  blob = new Blob([File], { type: "text/csv" });
  const  reader = new FileReader();
  reader.readAsText(blob);
  const result = reader.result;
  if (typeof result === "string") {
    const arranged = result.split("\n")
    const headers = arranged[0].split(",")
    const rows = arranged.slice(1).map(row => {
      const values = row.split(",").map(value => value.trim());
      return headers.reduce((obj: Record<string, string>, header, index) => {
        obj[header] = values[index] || '';
        return obj;
      }, {});
    });
    return rows;
  } else {
    return (
      <div>
        <h1>Error reading file</h1>
      </div>
    );
  }
};
export default App;
/* okay recursion works 
tho i'm not sure why */

// You actually never need recursion,it's quite memory-consuming and your event loop is going to take a nap
