### public env variables

These files are injected into process.env by Webpack (see Webpack config files).

This allows us to use env variables in client-side JS.

Webpack expects the variables to be JSON strings, which means the double-quotes inside
the strings are important.
