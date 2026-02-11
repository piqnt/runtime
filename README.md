# Piqnt Runtime

Piqnt Runtime is a collection of middlewares that power Piqnt.com, and Planck.js Testbed.

You can use it to run your code, or mix-and-match middlewares to create your own runtime environment.

### Middleware Architecture

To learn more about middlewares, check out the [Polymatic](https://github.com/piqnt/polymatic) project.

### Usage Examples

To learn how you can use it in your project, see following examples:

[Testbed](https://github.com/piqnt/runtime/blob/main/packages/planck-testbed/src/testbed/TestbedMain.ts) - Includes a preset of middlewares for running Planck.js physics engine examples.  

Pinball game ([Play](https://piqnt.github.io/polymatic-example-pinball/), [Source](https://github.com/piqnt/polymatic-example-pinball/)) - Uses a subset of Testbed middlewares, and adds custom middlewares for loading svg table design, loading data into physics, user input handing, etc.  
