# Suite Level Skipping on Mocha

Example of using hooks to skip entire suite when encountering a fail.

Looking at the result below, you can see that:

- Test will resume if the suite name is different despite of them being described within the same file.
- Test will resume if the filename is different despite of them having the same suite name.
- Able to run through all the suite and skip the remaining tests within a suite when encountering any fails within that specific suite.

See [`file-level-skip` branch](https://github.com/josephting/mocha-suite-level-skipping/tree/file-level-skip) for test file level skipping instead.

## Result

```bash
> mocha



  Use Case 1
    ✓ should do addition maths correctly
    1) should do subtraction maths correctly
    - should do multiplication maths correctly
    - should do division maths correctly

  Use Case 1b
    ✓ should do OP multiplication maths correctly
    ✓ should do OP division maths correctly

  Use Case 2
    ✓ should eval undefined type to undefined
    ✓ should eval null type to object
    2) should eval boolean type to boolean
    - should eval number type to number
    - should eval string type to string
    - should eval array type to object
    - should eval function type to function

  Use Case 2
    ✓ should return number type value
    3) should return 0
    - should return 3

  Use Case 3
    ✓ should return value of type string


  7 passing (18ms)
  7 pending
  3 failing

  1) Use Case 1
       should do subtraction maths correctly:

      AssertionError: expected 1 to equal 0
      + expected - actual

      -1
      +0

      at Context.<anonymous> (test/uc_1.spec.js:10:20)

  2) Use Case 2
       should eval boolean type to boolean:

      AssertionError: expected 'boolean' to equal 'aboolean'
      + expected - actual

      -boolean
      +aboolean

      at Context.<anonymous> (test/uc_2.spec.js:14:28)

  3) Use Case 2
       should return 0:

      AssertionError: expected 0 to equal 1
      + expected - actual

      -0
      +1

      at Context.<anonymous> (test/uc_3.spec.js:10:28)



npm ERR! Test failed.  See above for more details.
```
