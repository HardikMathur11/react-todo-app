
// | Case          | Code                                | Explanation              |
// | ------------- | ----------------------------------- | ------------------------ |
// | No argument   | `onClick={functionName}`            | ✅ Direct reference       |
// | With argument | `onClick={() => functionName(arg)}` | ✅ Arrow function wrapper |
// | Function call | `onClick={functionName()}`          | ❌ Runs immediately       |