type MyObj = {
  [key: string]: any;
};

const myObj: MyObj = {
  hello: "world",
  sir: 10,
};

type keyTest<obj> = {
  [k in keyof obj]?: any;
};

const concretion: keyTest<{ hello: "world" }> = {
  hello: "boi",
};
