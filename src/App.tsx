const App = () => {
  const pow = (x: number, n: number): number => {
    if (n === 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  };
};

export default App;
/* okay recursion works 
tho i'm not sure why */