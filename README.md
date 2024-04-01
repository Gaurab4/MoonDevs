# Task-Fragmentation

My Pick - Fragmentation of Functionality & UI

## My Reasons for Fragmentating it like that

- I have separated the constants, hooks, and components into different files.
- I have segregated common components from the main components directory, creating a subdirectory named commonComponent.
- The code is well-structured for both use cases.
- The useEffect and functions are placed in files where they are needed, for improving the re-rendering issues which will increase the code speed.
- I have created useState hooks for previously missing entities, improving their usability within components.
- Recognizing the usage of styled components in certain parts of the code, I have ensured their presence.
- Custom components have been separated, with relevant information passed accordingly.
- In some cases, I used "any" when passing values due to uncertainty about the actual data type.
