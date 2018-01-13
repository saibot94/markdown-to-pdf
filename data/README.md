# XML Final Project



# Description

This is the implementation and documentation for the final project of the XML technologies class, AIDC year 2, 2017.
The exact requirements are listed [in this document here](REQUIREMENTS.md)

# Implementation

TODO: add impl details

# Running the service

In order to run this locally, you have two different options.

## Running with SBT

Just launch `sbt` using the command and then run the command:

```
jetty:start
```

You should then be able to access all things on localhost.

## Deploying to a servlet container

You should run `sbt` then execute the task:
```
package
```
Inside the `target` folder you should be able to see
the `.war` file resulted from the build. Deploy this
file inside your favored container and enjoy.


# Documentation

In order to compile and see the docs, you need to have Python installed on your machine. Afterwards, install the requirements present at
`requirements.txt` using the command `pip install -r requirements.txt`.

Then, in order to build the html version of the docs, go to the `docs` folder in the project root and run the command `make html`.


The `_build` folder will now contain a file `index.html` that will take you to the root of your documentation.



### Rights

Copyright Cristian Schuszter, 2017 - 2018.
